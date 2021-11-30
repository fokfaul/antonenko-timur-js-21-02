import { takeEvery, put, all, call } from 'redux-saga/effects';
import { LOAD_POSTS } from '../constants/actions/posts';
import { getPostsList } from '../api/dumMyApi';
import { loadErrorAction, loadSuccessAction } from '../actions/PostsActions';

function* loadPosts(action) {
  try {
    const [apiResult] = yield all([
      call(
        getPostsList,
        action.page,
        action.limit,
        action.id
      ),
    ]);

    yield put(
      loadSuccessAction(apiResult),
    );
  } catch (e) {
    yield put(loadErrorAction(e.toString()));
  }
}

export default function* postsWatcher() {
  yield takeEvery(
    LOAD_POSTS,
    loadPosts,
  );
}