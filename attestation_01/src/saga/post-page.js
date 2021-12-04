import { takeEvery, put, all, call } from 'redux-saga/effects';
import { LOAD_POST_PAGE } from '../constants/actions/post-page';
import { getPostById } from '../api/dumMyApi';
import { loadErrorAction, loadSuccessAction } from '../actions/PostPageActions';

function* loadPost(action) {
  try {
    const [apiResult] = yield all([
      call(
        getPostById,
        action.id,
      ),
    ]);
    yield put(
      loadSuccessAction(apiResult),
    );
  } catch (e) {
    yield put(loadErrorAction(e.toString()));
  }
}

export default function* postWatcher() {
  yield takeEvery(
    LOAD_POST_PAGE,
    loadPost,
  );
}