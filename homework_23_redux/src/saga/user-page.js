import { takeEvery, put, all, call } from 'redux-saga/effects';
import { LOAD_USER_PAGE } from '../constants/actions/user-page';
import { getUserById } from '../api/dumMyApi';
import { loadErrorAction, loadSuccessAction } from '../actions/UserPageActions';

function* loadUser(action) {
  try {
    // Верный пример запроса к нескольким API (запросы производятся параллельно)
    const [apiResult] = yield all([ // Паралельный вызов
      call( // Вызвать метод
        getUserById, // Вызываемый метод
        action.id, // Параметры для вызова метода
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
    LOAD_USER_PAGE, // Тип action'a
    loadUser, // Обработчик
  );
}