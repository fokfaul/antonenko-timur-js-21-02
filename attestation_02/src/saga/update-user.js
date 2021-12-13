import { takeEvery, put, all, call } from 'redux-saga/effects';
import { UPDATE_USER } from '../constants/actions/update-user';
import { updateUser } from '../api/dumMyApi';
import { updateEndAction } from '../actions/UpdateUserActions';
import { loginErrorAction, loginSuccessAction } from '../actions/LoginActions';

function* update(action) {
  try {
    const [apiResult] = yield all([
      call(updateUser, action.id, action.userInfo,),
    ]);
    if("id" in apiResult){
        yield all([
            put(updateEndAction()),
            put(loginSuccessAction(apiResult))
        ]);
    } else if ('error' in apiResult) {
        const error = apiResult.data ? Object.values(apiResult.data).join('<br/>') : apiResult.error;
        yield all([
            put(updateEndAction()),
            put(loginErrorAction(error))
        ]);
    }
  } catch (e) {
    yield all([
        put(updateEndAction()),
        put(loginErrorAction(e.toString()))
    ]);
  }
}

export default function* updateUserWatcher() {
  yield takeEvery(
    UPDATE_USER,
    update,
  );
}