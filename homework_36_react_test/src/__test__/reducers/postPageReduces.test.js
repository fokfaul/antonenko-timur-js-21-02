import reducer from '../../reducers/postPageReduces'

const initialState = {
  id: false,
  loading: false,
  error: "",
  postInfo: {}
};

describe('postPageReduces test', () => {

  test('LOAD_POST_PAGE', () => {
    expect(reducer(initialState, {type: 'POST_PAGE/LOAD_POST_PAGE', id: "ad32"})).toEqual({
      ...initialState,
      loading: true,
      id: "ad32"
    })
  })

  test('LOAD_POST_PAGE_SUCCESS', () => {
    const resp = {
        id: "ad32",
    }
    expect(reducer(initialState, {type: 'POST_PAGE/LOAD_POST_PAGE_SUCCESS', postInfo: resp})).toEqual({
      ...initialState,
      postInfo: resp,
    })
  })

  test('LOAD_POST_PAGE_ERROR', () => {
    const error = 'fatal error'
    expect(reducer(initialState, {type: 'POST_PAGE/LOAD_POST_PAGE_ERROR', error})).toEqual({
      ...initialState,
      error
    })
  })

  test('UNKNOWN ACTION', () => {
    expect(reducer(initialState, {type: 'UNKNOWN'})).toEqual(initialState)
  })
})