import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import users from '../reducers/usersReduces';
import registration from '../reducers/registrationReduces';
import userPage from '../reducers/userPageReduces';
import usersWatcher from '../saga/users';
import registrationWatcher from '../saga/registration';
import userPageWatcher from '../saga/user-page';

const sagaMiddleware = createSagaMiddleware(); // Создание прослойки saga

const store = createStore(
  combineReducers(
    {
      users, registration, userPage
    },
  ),
  applyMiddleware(sagaMiddleware), // Применение middleware
);

sagaMiddleware.run(usersWatcher);
sagaMiddleware.run(userPageWatcher);
sagaMiddleware.run(registrationWatcher);// Подключение watcher к saga. Должно быть после подключения прослойки

export default store;