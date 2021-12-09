import { takeEvery, put, all, call } from 'redux-saga/effects';
import { LOGIN_USER } from '../constants/actions/login';
import { getUserById } from '../api/dumMyApi';
import { loginErrorAction, loginSuccessAction } from '../actions/LoginActions';

function* loginUser(action) {
  try {
    const [apiResult] = yield all([
      call(getUserById, action.id,),
    ]);
    if("id" in apiResult){
        yield put(loginSuccessAction(apiResult));
    } else if ('error' in apiResult) {
        if(apiResult.data)
            yield put(loginErrorAction(Object.values(apiResult.data).join('<br/>')));
        else
            yield put(loginErrorAction("Ошибка входа"));
    }
  } catch (e) {
    yield put(loginErrorAction(e.toString()));
  }
}

export default function* loginWatcher() {
  yield takeEvery(
    LOGIN_USER,
    loginUser,
  );
}