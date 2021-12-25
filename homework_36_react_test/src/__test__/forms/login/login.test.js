import React from 'react';
import configureStore from 'redux-mock-store';
import { render, mount } from 'enzyme';
import createSagaMiddleware from 'redux-saga';
import Login from '../../../forms/login/Login';
import * as actions from '../../../actions/LoginActions';

jest.mock('../../../actions/LoginActions');

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Login form test', () => {
  test('should render tree users', () => {
    const store = mockStore({
      login: {
        id: "",
        loading: false,
      },
      registration: {error : ""}
    });
    const wrapper = render(<Login store={store} />);
    expect(wrapper.find('#login__form')).toHaveLength(1);
  });

  test('should render loading', () => {
    const store = mockStore({
      login: {
        id: "",
        loading: true,
      },
      registration: {error : ""}
    });
    const wrapper = render(<Login store={store} />);
    expect(wrapper.find('.loader')).toHaveLength(1);
  });
});