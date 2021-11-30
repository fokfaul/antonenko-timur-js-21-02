import {
  APP_ID_FIELD, APP_ID_VALUE, USER_URL, LIMIT_FIELD, PAGE_FIELD, BASE_URL, POST_URL
} from '../constants/api/dumMyApi';
import { METHOD_GET, METHOD_POST } from '../constants/api/common';

const doGetRequest = (path, searchParams?) => {
  const url = new URL(path, BASE_URL);
  searchParams && Object.entries(searchParams).forEach((params) => {
    url.searchParams.append(params[0], params[1].toString());
  });
  return fetch(url.toString(), {
    method: METHOD_GET,
    headers: new Headers({ [APP_ID_FIELD]: APP_ID_VALUE, }),
  }).then((resp) => resp.json());
};

const doPostRequest = (path, postObj) => {
  return fetch(BASE_URL+path, {
    method: METHOD_POST,
    headers: new Headers({ [APP_ID_FIELD]: APP_ID_VALUE, 'Content-Type': 'application/json;charset=utf-8' }),
    body: JSON.stringify(postObj)
  }).then((resp) => resp.json());
};

export const getUsersList = (page, limit) => doGetRequest(
        USER_URL,
        {[PAGE_FIELD]: page.toString(), [LIMIT_FIELD]: limit.toString()}
);
export const getPostsList = (page, limit) => doGetRequest(
        POST_URL,
        {[PAGE_FIELD]: page.toString(), [LIMIT_FIELD]: limit.toString()}
);
export const getCommentsList = (id, page, limit) => doGetRequest(
        `${POST_URL}/${id}/comment`,
        {[PAGE_FIELD]: page.toString(), [LIMIT_FIELD]: limit.toString()}
);

export const getUserById = (id) => doGetRequest(`${USER_URL}/${id}`);
export const getPostById = (id) => doGetRequest(`${POST_URL}/${id}`);

/*.then(
    (resp_post) => doGetRequest(`${POST_URL}/${id}`/comment).then(
        (resp_comments) => ({"postInfo": resp_post, "commentList": resp_comments})
    )
);*/

export const addUser = (userObj) => doPostRequest("user/create", userObj);