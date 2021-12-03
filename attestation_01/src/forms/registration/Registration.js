import './Registration.css';
import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Container} from '../../wrappers/container/Container';
import {Loader} from '../../components/loader/Loader';
import {UserForm} from '../../components/user-form/UserForm';
import { addAction, resetAction } from '../../actions/RegistrationActions';

const Registration = ({loading, id, addUser, error, resetState}) => {
  const history = useHistory();
    useEffect(() => {
        if(id)
        {
            history.push("/users");
            resetState();
            return;
        }
        if(error)
        {
            resetState();
            alert(error);
        }
    }, [id, error]);

  return (
    <section className="registration"><Container>
        {loading? <Loader/> : ""}
        <h2>Регистрация</h2>
        <UserForm callback={addUser}/>
    </Container></section>
  );
};

export default connect(
  (state) => ({
    loading: state.registration.loading,
    id: state.registration.id,
    error: state.registration.error,
  }),
  (dispatch) => ({
    addUser: bindActionCreators(addAction, dispatch),
    resetState: bindActionCreators(resetAction, dispatch),
  }),
)(Registration);