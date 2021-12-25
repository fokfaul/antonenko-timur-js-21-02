import React from 'react';
import configureStore from 'redux-mock-store';
import { render, mount } from 'enzyme';
import createSagaMiddleware from 'redux-saga';
import Users from '../../../forms/users/Users';
import * as actions from '../../../actions/UsersActions';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../../actions/UsersActions');

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('UserList form test', () => {
  test('should render tree users', () => {
    const store = mockStore({
      users: {
        usersList: [
          { name: 'Alex', id: "1" },
          { name: 'Oleg', id: "2" },
          { name: 'Andy', id: "3" },
        ],
        page: 0,
        total: 0,
        limit: 6,
        loading: false,
        error: "",
      },
      theme: {theme : ""}
    });
    const wrapper = render(<BrowserRouter><Users store={store} /></BrowserRouter>);
    expect(wrapper.find('.user')).toHaveLength(3);
  });

  test('should render loading', () => {
    const store = mockStore({
      users: {
        usersList: [],
        loading: true,
        page: 0,
        total: 0,
        limit: 6,
        error: "",
      },
      theme: {theme : ""}
    });
    const wrapper = render(<BrowserRouter><Users store={store} /></BrowserRouter>);
    expect(wrapper.find('.win-loader')).toHaveLength(1);
  });

  test('should render error', () => {
    const store = mockStore({
      users: {
        usersList: [],
        loading: false,
        page: 0,
        total: 0,
        limit: 6,
        error: "error",
      },
      theme: {theme : ""}
    });
    const wrapper = render(<BrowserRouter><Users store={store} /></BrowserRouter>);
    expect(wrapper.find('.users__list')).toHaveLength(0);
  });

  test('should call load action', () => {
    const store = mockStore({
      users: {
        usersList: [],
        loading: false,
        page: 0,
        total: 0,
        limit: 6,
        error: "",
      },
      theme: {theme : ""}
    });
    store.dispatch = jest.fn();
    mount(<Users store={store} />);
    expect(actions.loadAction).toBeCalledWith(0, 6);
  });
});