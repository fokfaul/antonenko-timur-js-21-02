import produce from 'immer';
import { LOAD_USER_PAGE, LOAD_USER_PAGE_ERROR, LOAD_USER_PAGE_SUCCESS } from '../constants/actions/user-page';

const initialState = {
  id: false,
  loading: true,
  error: "",
  userInfo: false
};

const load = (draft, id) => {
  draft.loading = true;
  draft.id = id;
  return draft;
};
const loadSuccess = (draft, resp) => {
  draft.userInfo = resp;
  draft.loading = false;
  return draft;
};
const loadError = (draft, e?) => {
  draft.loading = false;
  draft.error = e || "";
  return draft;
};

export default (state = initialState, action) => produce(
  state,
  (draft) => {
    switch (action.type) {
      case LOAD_USER_PAGE: return load(draft, action.id);
      case LOAD_USER_PAGE_SUCCESS: return loadSuccess(draft, action.userInfo);
      case LOAD_USER_PAGE_ERROR: return loadError(draft, action.error);
      default: return state;
    }
  },
);