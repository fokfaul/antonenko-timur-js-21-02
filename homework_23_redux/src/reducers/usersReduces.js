import produce from 'immer';
import { LOAD_USERS, LOAD_USERS_ERROR, LOAD_USERS_SUCCESS } from '../constants/actions/users';
import { getNav } from '../constants/navigation/common';

const initialState = {
  usersList: [],
  page: 0,
  limit: 10,
  paging: [],
  loading: false,
  error: "",
};

const load = (draft, page?, limit?) => {
  draft.loading = true;
  draft.page = page || 0;
  draft.limit = limit || 10;
  return draft;
};
const loadSuccess = (draft, resp?) => {
  const max_pages = (resp.total - resp.total % resp.limit) / resp.limit + (resp.total % resp.limit > 0 ? 1:0)
  draft.page = resp.page? resp.page>max_pages? max_pages : resp.page : 0;
  draft.limit = resp.limit || 10;
  draft.paging = getNav(max_pages, resp.page+1) || [];
  draft.usersList = resp.data || [];
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
    console.log(action);
    console.log(draft);
    switch (action.type) {
      case LOAD_USERS: return load(draft, action.page, action.limit);
      case LOAD_USERS_SUCCESS: return loadSuccess(draft, action.usersList);
      case LOAD_USERS_ERROR: return loadError(draft, action.error);
      default: return state;
    }
  },
);