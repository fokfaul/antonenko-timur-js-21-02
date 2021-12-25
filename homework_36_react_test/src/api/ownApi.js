import { USER_URL, LIMIT_FIELD, PAGE_FIELD, BASE_URL, POST_URL } from '../constants/api/ownApi';
import { METHOD_GET, METHOD_POST, METHOD_PUT } from '../constants/api/common';
import { ownRequestHeaders } from '../hooks/headersRequest';

const doGetRequest = (path, searchParams?) => {
  const url = new URL(path, BASE_URL);
  searchParams && Object.entries(searchParams).forEach((params) => {
    url.searchParams.append(params[0], params[1].toString());
  });
  return fetch(url.toString(), {
    method: METHOD_GET,
    headers: ownRequestHeaders(),
  }).then((resp) => resp.json());
};

const doPostRequest = (path, postObj) => {
  return fetch(BASE_URL+path, {
    method: METHOD_POST,
    headers: ownRequestHeaders(true),
    body: JSON.stringify(postObj)
  }).then((resp) => resp.json());
};

const doPutRequest = (path, postObj) => {
  return fetch(BASE_URL+path, {
    method: METHOD_PUT,
    headers: ownRequestHeaders(true),
    body: JSON.stringify(postObj)
  }).then((resp) => resp.json());
};

export const getUsersList = (page, limit) => doGetRequest(
    USER_URL,
    {[PAGE_FIELD]: page.toString(), [LIMIT_FIELD]: limit.toString()}
);
export const getPostsList = (page, limit, id?) => {
    const url = id? `${USER_URL}/${id}/post` : POST_URL;
    return doGetRequest(
        url,
        {[PAGE_FIELD]: page.toString(), [LIMIT_FIELD]: limit.toString()}
    );
}
export const getCommentsList = (id, page, limit) => doGetRequest(
    `${POST_URL}/${id}/comment`,
    {[PAGE_FIELD]: page.toString(), [LIMIT_FIELD]: limit.toString()}
);

export const getUserById = (id) => doGetRequest(`${USER_URL}/${id}`);
export const getPostById = (id) => doGetRequest(`${POST_URL}/${id}`);

export const addUser = (userObj) => doPostRequest(`${USER_URL}/create`, userObj);

export const updateUser = (id, userObj) => doPutRequest(`${USER_URL}/${id}`, userObj);