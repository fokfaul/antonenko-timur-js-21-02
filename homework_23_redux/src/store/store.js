import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import users from '../reducers/usersReduces';
import usersWatcher from '../saga/users';

/*const middleware = (store: any) => (next: any) => (action: any) => { // Пример прослойки логгирования
  console.group(`${action.type} log`);
  console.log(action);
  console.log(store);
  console.groupEnd();
  next(action);
};*/

const sagaMiddleware = createSagaMiddleware(); // Создание прослойки saga

const store = createStore(
  combineReducers(
    {
      users,
    },
  ),
  applyMiddleware(sagaMiddleware), // Применение middleware
);

sagaMiddleware.run(usersWatcher); // Подключение watcher к saga. Должно быть после подключения прослойки

export default store;