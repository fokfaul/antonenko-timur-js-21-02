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

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers(
    {
      users, posts, postPage, comments
    },
  ),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(usersWatcher);
sagaMiddleware.run(postsWatcher);
sagaMiddleware.run(postPageWatcher);
sagaMiddleware.run(commentsWatcher);

export default store;