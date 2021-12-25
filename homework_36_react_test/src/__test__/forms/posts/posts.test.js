import React from 'react';
import configureStore from 'redux-mock-store';
import { render, mount } from 'enzyme';
import createSagaMiddleware from 'redux-saga';
import Posts from '../../../forms/posts/Posts';
import * as postActions from '../../../actions/PostsActions';
import * as postPageActions from '../../../actions/PostPageActions';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

jest.mock('../../../actions/PostsActions');

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Posts form test', () => {
  test('should render tree posts, animate window post', () => {
    const store = mockStore({
      posts: {
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
      },
      postPage: {loading: false, postInfo: { title: 'Red', text: "color 1", owner: { id: "1" } } }
    });
    store.dispatch = jest.fn();
    const wrapper = render(<BrowserRouter><Posts store={store} /></BrowserRouter>);
    expect(wrapper.find('.post')).toHaveLength(3);
  });

  test('should render loading', () => {
    const store = mockStore({
      posts: {
        postsList: [],
        page: 0,
        total: 0,
        limit: 6,
        loading: true,
        error: "",
      },
      postPage: {loading: false, postInfo: {}}
    });
    const wrapper = render(<BrowserRouter><Posts store={store} /></BrowserRouter>);
    expect(wrapper.find('.win-loader')).toHaveLength(1);
  });

  test('should render error', () => {
    const store = mockStore({
      posts: {
        postsList: [],
        page: 0,
        total: 0,
        limit: 6,
        loading: false,
        error: "error",
      },
      postPage: {loading: false, postInfo: {}}
    });
    const wrapper = render(<BrowserRouter><Posts store={store} /></BrowserRouter>);
    expect(wrapper.find('.posts__list')).toHaveLength(0);
  });

  test('should call load action, animation window', () => {
    const store = mockStore({
      posts: {
        postsList: [
          { title: 'Red', text: "color 1", owner: { id: "1" } },
        ],
        page: 0,
        total: 1,
        limit: 6,
        loading: false,
        error: "",
      },
      comments: {
        commentsList: [],
        page: 0,
        total: 0,
        limit: 6,
        loading: false,
        error: "",
      },
      postPage: {loading: false, postInfo: { title: 'Red', text: "color 1", owner: { id: "1" } } }
    });
    store.dispatch = jest.fn();
    const wrapper = mount(<BrowserRouter><Provider store={store}><Posts /></Provider></BrowserRouter>);
    expect(postActions.loadAction).toBeCalledWith(0, 6);
    wrapper.find('div.post').simulate('click');
    expect(wrapper.find('.post-window')).toHaveLength(1);
    wrapper.find('.post-window-close').simulate('click');
    expect(wrapper.find('.post-window')).toHaveLength(0);
  });
});