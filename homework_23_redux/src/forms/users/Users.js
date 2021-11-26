import './Users.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Container} from '../../wrappers/container/Container';
import {User} from '../../components/user/User';
import {Navigation} from '../../components/navigation/Navigation';
import {LimitSelect} from '../../components/limitselect/LimitSelect';
import {Loader} from '../../components/loader/Loader';

import { loadAction } from '../../actions/UsersActions';
import useOnceOnMount from '../../hooks/useOnceOnMount';

const Users = ({usersList, page, limit, paging, loading, load, error}) => {
    const moveToPage = (p) => {load(p, limit)};
    const changeLimit = (l) => {load(page, l)};

    useOnceOnMount(() => {load(0, 10);});


    return (
      <section className="users">
        {loading? <Loader/> : error? alert(error) :
            <Container>
                <div className="users__list">
                  {usersList?.map((elem, index) => (
                    <User
                      imgUrl={elem.picture}
                      name={elem.title+". "+elem.firstName+" "+elem.lastName}
                      userId={elem.id}
                      key={index}
                    />
                  ))}
                </div>
                <Navigation current={page+1} pages={paging} moveToPage={moveToPage}/>
                <LimitSelect changeLimit={changeLimit} limit={limit}/>
            </Container>
        }
      </section>
    );
}

export default connect(
  (state) => ({
    usersList: state.users.usersList,
    page: state.users.page,
    paging: state.users.paging,
    loading: state.users.loading,
    limit: state.users.limit,
    error: state.users.error,
  }),
  (dispatch) => ({
    load: bindActionCreators(loadAction, dispatch),
  }),
)(Users);