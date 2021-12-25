import reducer from '../../reducers/postsReduces'

const initialState = {
  postsList: [],
  page: 0,
  total: 0,
  limit: 6,
  loading: false,
  error: "",
  id: ""
};

describe('postsReduces test', () => {

  test('LOAD_POSTS', () => {
    expect(reducer(initialState, {type: 'POSTS/LOAD_POSTS'})).toEqual({
      ...initialState,
      loading: true
    })
  })

  test('LOAD_POSTS_SUCCESS', () => {
    const resp = {
        data:[{message: 'first'}, {message: 'second'}],
        page: 0,
        total: 2,
        limit: 6,
    }
    expect(reducer(initialState, {type: 'POSTS/LOAD_POSTS_SUCCESS', postsList: resp})).toEqual({
      ...initialState,
      postsList: resp.data,
      total: 2
    })
  })

  test('LOAD_POSTS_ERROR', () => {
    const error = 'fatal error'
    expect(reducer(initialState, {type: 'POSTS/LOAD_POSTS_ERROR', error})).toEqual({
      ...initialState,
      error
    })
  })

  test('UNKNOWN ACTION', () => {
    expect(reducer(initialState, {type: 'UNKNOWN'})).toEqual(initialState)
  })
})