import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import users from '../reducers/usersReduces';
import usersWatcher from '../saga/users';
import posts from '../reducers/postsReduces';
import postsWatcher from '../saga/posts';
import comments from '../reducers/commentsReduces';
import commentsWatcher from '../saga/comments';
import postPage from '../reducers/postPageReduces';
import postPageWatcher from '../saga/post-page';
import registration from '../reducers/registrationReduces';
import registrationWatcher from '../saga/registration';
import login from '../reducers/loginReduces';
import loginWatcher from '../saga/login';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers(
    {
      users, posts, postPage, comments, registration, login
    },
  ),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(usersWatcher);
sagaMiddleware.run(postsWatcher);
sagaMiddleware.run(postPageWatcher);
sagaMiddleware.run(commentsWatcher);
sagaMiddleware.run(registrationWatcher);
sagaMiddleware.run(loginWatcher);

export default store;