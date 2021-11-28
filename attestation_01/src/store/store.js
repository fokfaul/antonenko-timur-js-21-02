import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import users from '../reducers/usersReduces';
import usersWatcher from '../saga/users';
import posts from '../reducers/postsReduces';
import postsWatcher from '../saga/posts';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers(
    {
      users, posts
    },
  ),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(usersWatcher);
sagaMiddleware.run(postsWatcher);

export default store;