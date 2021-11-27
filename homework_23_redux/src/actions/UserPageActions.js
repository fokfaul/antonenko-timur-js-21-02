import { LOAD_USER_PAGE, LOAD_USER_PAGE_ERROR, LOAD_USER_PAGE_SUCCESS } from '../constants/actions/user-page';

export const loadAction = (id) => ({
  type: LOAD_USER_PAGE,
  id: id
});

export const loadSuccessAction = (userInfo) => ({
  type: LOAD_USER_PAGE_SUCCESS,
  userInfo: userInfo,
});

export const loadErrorAction = (e) => ({
  type: LOAD_USER_PAGE_ERROR,
  error: e,
});