import {
  APP_ID_FIELD, APP_ID_VALUE, USER_URL, LIMIT_FIELD, PAGE_FIELD,
} from '../constants/api/dumMyApi';
import { METHOD_GET } from '../constants/api/common';

export const getUsersList = (
  page,
  limit,
  callback,
  errorCallback,
) => fetch(USER_URL+"?"+PAGE_FIELD+"="+page.toString()+"&"+LIMIT_FIELD+"="+limit.toString(), {
  method: METHOD_GET,
  headers: new Headers({
    [APP_ID_FIELD]: APP_ID_VALUE
  }),
}).then((response) => response.json())
  .then((response) => {return callback(response.data, response.total)})
  .catch(errorCallback);