import './Profile.css';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadAction } from '../../actions/PostsActions';
import {Container} from '../../wrappers/container/Container';
import {WinLoader} from '../../windows/loader/WinLoader';
import {ProfilePost} from '../../components/profile-post/ProfilePost';
import {ArrowNav} from '../../components/arrow_nav/ArrowNav';

import useScrollToTop from "../../hooks/useScrollToTop";
import useOnceOnMount from '../../hooks/useOnceOnMount';
import {dateMDY} from '../../hooks/date';

const Profile = ({user, postsList, page, total, loading, limit, error, loadPosts}) => {
    useScrollToTop();
    const history = useHistory();
    const limitView = 2;
    const [counter, setCounter] = useState(1);
    const getNewPosts = (p) => loadPosts(p, limit, user.id);
    const nextPosts = () => {
        if((counter+1)*limitView>limit)
        {
            console.log(counter);
            setCounter(1);
            getNewPosts(page+1);
        }
        else
            setCounter(counter+1);
    };
    const previousPosts = () => {
        if(counter>1)
           setCounter(counter-1);
        else
        {
           console.log(counter);
           setCounter(limit/limitView);
           getNewPosts(page-1);
        }
    };
    useOnceOnMount(() => {
        if(localStorage.getItem("idUser"))
            loadPosts(page, limit, localStorage.getItem("idUser"));
        else
            history.push("/users");
    });
    return(
        <section className="profile"><Container>
            <div className="profile__interface">
                <div className="profile__user">
                    <img className="profile__user__img" src={user.picture} alt={user.id}/>
                    <div className="profile__user__info">
                        <h2 className="profile__user__name">{user.title+". "+user.firstName+" "+user.lastName}</h2>
                        <p className="profile__user__gender"><b>Gender:</b> {user.gender}</p>
                        <p className="profile__user__birth"><b>Date of birth:</b> {dateMDY(user.dateOfBirth)}</p>
                        <p className="profile__user__register"><b>Register:</b> {dateMDY(user.registerDate)}</p>
                        <p className="profile__user__phone"><b>Phone:</b> {user.phone}</p>
                        <p className="profile__user__email"><b>Email:</b> {user.email}</p>
                        <p className="profile__user__id"><b>ID:</b> {user.id}</p>
                    </div>
                </div>
                <div className="profile__posts">
                  {loading? <WinLoader/> :
                      <div className="profile__posts__view">
                        {
                            (total/limitView>1 && (counter!==1 || page!==0)) ?
                                <ArrowNav mode="reverse" moveToPage={previousPosts}/> : ""
                        }
                        <div className="profile__posts__list">
                          {postsList?.slice((counter-1)*limitView, counter*limitView).map((elem, index) => (
                            <ProfilePost post={elem} key={index}/>
                          ))}
                        </div>
                        {
                            (total/limitView>1 && (page*limit+(counter+1)*limitView) <= total) ?
                                <ArrowNav moveToPage={nextPosts}/> : ""
                        }
                      </div>
                  }
                </div>
            </div>
        </Container></section>
    );
};

export default connect(
  (state) => ({
    postsList: state.posts.postsList,
    page: state.posts.page,
    total: state.posts.total,
    loading: state.posts.loading,
    limit: state.posts.limit,
    error: state.posts.error,
    user: state.login.userInfo,
  }),
  (dispatch) => ({
    loadPosts: bindActionCreators(loadAction, dispatch),
  }),
)(Profile);