import {
  APP_ID_FIELD, APP_ID_VALUE, USER_URL, LIMIT_FIELD, PAGE_FIELD, BASE_URL
} from '../constants/api/dumMyApi';
import { METHOD_GET, METHOD_POST } from '../constants/api/common';

const doGetRequest = (path, callback, errorCallback?, finalCallback?, searchParams?) => {
  const url = new URL(path, BASE_URL);
  searchParams && Object.entries(searchParams).forEach((params) => {
    url.searchParams.append(params[0], params[1].toString());
  });
  fetch(url.toString(), {
    method: METHOD_GET,
    headers: new Headers({ [APP_ID_FIELD]: APP_ID_VALUE, }),
  }).then((resp) => resp.json())
    .then(callback)
    .catch(errorCallback)
    .finally(finalCallback);
};

const doPostRequest = (path, postObj, callback?, errorCallback?, finalCallback?) => {
  fetch(BASE_URL+path, {
    method: METHOD_POST,
    headers: new Headers({ [APP_ID_FIELD]: APP_ID_VALUE, 'Content-Type': 'application/json;charset=utf-8' }),
    body: JSON.stringify(postObj)
  }).then((resp) => resp.json())
    .then(callback)
    .catch(errorCallback)
    .finally(finalCallback);
};

export const getUsersList = (page, limit, callback, errorCallback?, finalCallback?) => {
    doGetRequest(
        USER_URL,
        (resp) => callback(resp.data, resp.total),
        errorCallback,
        finalCallback,
        {[PAGE_FIELD]: page.toString(), [LIMIT_FIELD]: limit.toString()}
    );
}

export const getUserById = (
  id,
  callback,
  errorCallback?,
  finalCallback?
) => {
  doGetRequest(`${USER_URL}/${id}`, callback, errorCallback, finalCallback);
};

export const addUser = (userObj, callback?, errorCallback?, finalCallback?) => {
    console.log(userObj);
    doPostRequest("user/create", userObj, callback, errorCallback, finalCallback);
}