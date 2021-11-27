import { takeEvery, put, all, call } from 'redux-saga/effects';
import { ADD_USER } from '../constants/actions/registration';
import { addUser } from '../api/dumMyApi';
import { addErrorAction, addSuccessAction } from '../actions/RegistrationActions';

function* addUsers(action) {
  try {
    // Верный пример запроса к нескольким API (запросы производятся параллельно)
    const [apiResult] = yield all([ // Паралельный вызов
      call( // Вызвать метод
        addUser, // Вызываемый метод
        action.userInfo, // Параметры для вызова метода
      ),
    ]);
    if("id" in apiResult){
        yield put(addSuccessAction(apiResult));
    } else if ('error' in apiResult && apiResult.data) {
        yield put(addErrorAction(Object.values(apiResult.data).join('<br/>')));
    }
  } catch (e) {
    yield put(addErrorAction(e.toString()));
  }
}

export default function* usersWatcher(
  // action
) {
  yield takeEvery(
    ADD_USER, // Тип action'a
    addUsers, // Обработчик
  );
}