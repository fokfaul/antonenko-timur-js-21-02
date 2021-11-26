import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import users from '../reducers/usersReduces';
import registration from '../reducers/registrationReduces';
import usersWatcher from '../saga/users';
import registrationWatcher from '../saga/registration';

const sagaMiddleware = createSagaMiddleware(); // Создание прослойки saga

const store = createStore(
  combineReducers(
    {
      users, registration
    },
  ),
  applyMiddleware(sagaMiddleware), // Применение middleware
);

sagaMiddleware.run(usersWatcher);
sagaMiddleware.run(registrationWatcher);// Подключение watcher к saga. Должно быть после подключения прослойки

export default store;