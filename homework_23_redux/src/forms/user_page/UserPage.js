import './UserPage.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Container} from '../../wrappers/container/Container';
import {Loader} from '../../components/loader/Loader';
import { useParams } from 'react-router-dom';
import useScrollToTop from "../../hooks/useScrollToTop";
import useOnceOnMount from '../../hooks/useOnceOnMount';
import {dateMDY} from '../../hooks/date';
import {BackButton} from '../../components/back_button/BackButton';
import { loadAction } from '../../actions/UserPageActions';

const UserPage = ({user, loading, load, error}) => {
    useScrollToTop();
    const params = useParams();
    useOnceOnMount(() => {
        load(params.id);
    });
    return(
        <section className="user-page"><Container>
            {loading? <Loader/> : user?
                <div className="user-page__interface">
                    <BackButton/>
                    <div className="user-info">
                        <img className="user-info__img" src={user.picture} alt={user.id}/>
                        <div className="user-info__basic">
                            <h3 className="user-info__name">{user.title+". "+user.firstName+" "+user.lastName}</h3>
                            <div className="user-info__gender">Gender: {user.gender}</div>
                            <div className="user-info__birth">Date of birth: {dateMDY(user.dateOfBirth)}</div>
                            <div className="user-info__register">Register: {dateMDY(user.registerDate)}</div>
                            <br/>
                            <div className="user-info__phone">Phone: {user.phone}</div>
                            <div className="user-info__email">Email: {user.email}</div>
                        </div>
                        <div className="user-info__location">
                            <h3>Address</h3>
                            <div className="user-info__state">State: {user.location.state}</div>
                            <div className="user-info__street">Street: {user.location.street}</div>
                            <div className="user-info__city">City: {user.location.city}</div>
                            <div className="user-info__country">Country: {user.location.country}</div>
                        </div>
                    </div>
                </div>
            : ""}
        </Container></section>
    );
};

export default connect(
  (state) => ({
    user: state.userPage.userInfo,
    loading: state.userPage.loading,
    error: state.userPage.error,
  }),
  (dispatch) => ({
    load: bindActionCreators(loadAction, dispatch),
  }),
)(UserPage);