import { takeEvery, put, all, call } from 'redux-saga/effects';
import { GET_PROFILE } from '../constants/actions/profile';
import { getUserById, getPostsList } from '../api/dumMyApi';
import { loadErrorAction, loadSuccessAction } from '../actions/ProfileActions';

function* getProfile(action) {
  try {
    let error = "";
    const userResult = yield call(getUserById, action.id);
    if ('error' in userResult)
        error = userResult.data ? Object.values(userResult.data).join('<br/>') : userResult.error.toString()+"\n";
    const postResult = yield call(getPostsList, action.page, action.limit, action.id);
    if ('error' in postResult)
        error += postResult.data ? Object.values(postResult.data).join('<br/>') : postResult.error.toString();
    if(error){
        yield put(loadErrorAction(error));
    } else {
        yield put(loadSuccessAction(userResult, postResult));
    }
  } catch (e) {
    yield all([
        put(loadErrorAction(e.toString()))
    ]);
  }
}

export default function* profileWatcher() {
  yield takeEvery(
    GET_PROFILE,
    getProfile,
  );
}