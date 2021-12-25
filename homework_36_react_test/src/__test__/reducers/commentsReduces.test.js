import reducer from '../../reducers/commentsReduces'

const initialState = {
  commentsList: [],
  page: 0,
  total: 0,
  limit: 20,
  loading: false,
  error: "",
};

describe('commentsReduces test', () => {

  test('LOAD_COMMENTS', () => {
    expect(reducer(initialState, {type: 'COMMENTS/LOAD_COMMENTS'})).toEqual({
      ...initialState,
      loading: true
    })
  })

  test('LOAD_COMMENTS_SUCCESS', () => {
    const resp = {
        data:[{message: 'first'}, {message: 'second'}],
        page: 0,
        total: 2,
        limit: 20,
    }
    expect(reducer(initialState, {type: 'COMMENTS/LOAD_COMMENTS_SUCCESS', commentsList: resp})).toEqual({
      ...initialState,
      commentsList: resp.data,
      total: 2
    })
  })

  test('LOAD_COMMENTS_ERROR', () => {
    const error = 'fatal error'
    expect(reducer(initialState, {type: 'COMMENTS/LOAD_COMMENTS_ERROR', error})).toEqual({
      ...initialState,
      error
    })
  })

  test('UNKNOWN ACTION', () => {
    expect(reducer(initialState, {type: 'UNKNOWN'})).toEqual(initialState)
  })
})