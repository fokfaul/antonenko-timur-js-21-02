import { takeEvery, put, all, call } from 'redux-saga/effects';
import { LOAD_USERS } from '../constants/actions/users';
import { getUsersList } from '../api/dumMyApi';
import { loadErrorAction, loadSuccessAction } from '../actions/UsersActions';

function* loadUsers(action) {
  try {
    // Верный пример запроса к нескольким API (запросы производятся параллельно)
    const [apiResult] = yield all([ // Паралельный вызов
      call( // Вызвать метод
        getUsersList, // Вызываемый метод
        action.page, // Параметры для вызова метода
        action.limit, // Параметры для вызова метода
      ),
    ]);

    yield put( // Отправка action в store
      loadSuccessAction(apiResult), // action creater для action'a успешной загрузки
    );
  } catch (e) {
    yield put(loadErrorAction(e.toString()));
  }
}

export default function* usersWatcher(
  // action
) {
  yield takeEvery(
    LOAD_USERS, // Тип action'a
    loadUsers, // Обработчик
  );
}