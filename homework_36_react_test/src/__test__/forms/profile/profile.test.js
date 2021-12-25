import React from 'react';
import configureStore from 'redux-mock-store';
import { render, mount } from 'enzyme';
import createSagaMiddleware from 'redux-saga';
import Profile from '../../../forms/profile/Profile';
import * as actions from '../../../actions/ProfileActions';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../../actions/ProfileActions');
jest.mock('../../../actions/UpdateUserActions');

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
      id: 'ad32',
    }),
}));

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Profile form test', () => {
  test('should render tree users', () => {
    const store = mockStore({
      profile: {
        postsList: [ ],
        page: 0,
        total: 0,
        limit: 6,
        loading: false,
        error: "",
        userInfo: {firstName: "Alex", id: "ad32"}
      },
      login: {id : "ad32"}, updateUser: {loading : false},
    });
    const wrapper = render(<Profile store={store} />);
    expect(wrapper.find('.profile__user')).toHaveLength(1);
  });

  test('should render loading', () => {
    const store = mockStore({
      profile: {
        postsList: [ ],
        page: 0,
        total: 0,
        limit: 6,
        loading: true,
        error: "",
        userInfo: {}
      },
      login: {id : "ad32"}, updateUser: {loading : false},
    });
    const wrapper = render(<Profile store={store} />);
    expect(wrapper.find('.win-loader')).toHaveLength(1);
  });

  test('should render error', () => {
    const store = mockStore({
      profile: {
        postsList: [ ],
        page: 0,
        total: 0,
        limit: 6,
        loading: false,
        error: "error",
        userInfo: {}
      },
      login: {id : "ad32"}, updateUser: {loading : false},
    });
    const wrapper = render(<Profile store={store} />);
    expect(wrapper.find('.profile__interface')).toHaveLength(0);
  });

  test('should call load action, animation', () => {
    const store = mockStore({
      profile: {
        postsList: [
          { title: 'Red', text: "color 1", owner: { id: "1" } },
          { title: 'Blue', text: "color 2", owner: { id: "2" } },
          { title: 'Yellow', text: "color 3", owner: { id: "3" } },
        ],
        page: 0,
        total: 3,
        limit: 6,
        loading: false,
        error: "",
        userInfo: {}
      },
      login: {id : "ad32"}, updateUser: {loading : false},
    });
    store.dispatch = jest.fn();
    const wrapper = mount(<Profile store={store} />);
    expect(actions.loadAction).toBeCalledWith("ad32", 0, 6);
    wrapper.find('.arrow').simulate('click');
    expect(wrapper.find('.profile-post')).toHaveLength(1);
    wrapper.find('.arrow.reverse').simulate('click');
    expect(wrapper.find('.profile-post')).toHaveLength(2);
  });
});