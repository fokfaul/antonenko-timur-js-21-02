import reducer from '../../reducers/profileReduces'

const initialState = {
  loading: true,
  userInfo: {},
  postsList: {},
  id: false,
  limit: 10,
  page: 0,
  total: 0,
  error: ""
};

describe('profileReduces test', () => {

  test('GET_PROFILE', () => {
    expect(reducer(initialState, {type: 'PROFILE/GET_PROFILE', id: "ad32"})).toEqual({
      ...initialState,
      id: "ad32",
      loading: true
    })
  })

  test('GET_PROFILE_SUCCESS', () => {
    const userInfo = {name: "Andy", id: "ad32"}
    const postsList = {
        data:[{message: 'first'}, {message: 'second'}],
        page: 0,
        total: 2,
        limit: 6,
    }
    expect(reducer(initialState, {type: 'PROFILE/GET_PROFILE_SUCCESS', userInfo, postsList})).toEqual({
      ...initialState,
      postsList: postsList.data,
      loading: false,
      total: 2,
      limit: 6,
      userInfo
    })
  })

  test('GET_PROFILE_RESET', () => {
    expect(reducer(initialState, {type: 'PROFILE/GET_PROFILE_RESET'})).toEqual(initialState)
  })

  test('GET_PROFILE_ERROR', () => {
    const error = 'fatal error'
    expect(reducer(initialState, {type: 'PROFILE/GET_PROFILE_ERROR', error})).toEqual({
      ...initialState,
      loading: false,
      error
    })
  })

  test('UNKNOWN ACTION', () => {
    expect(reducer(initialState, {type: 'UNKNOWN'})).toEqual(initialState)
  })
})