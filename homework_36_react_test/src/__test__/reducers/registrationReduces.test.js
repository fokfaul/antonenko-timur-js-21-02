import reducer from '../../reducers/registrationReduces'

const initialState = {
  loading: false,
  userInfo: {},
  id: false,
  error: ""
};

describe('profileReduces test', () => {

  test('ADD_USER', () => {
    const userInfo = {name: "Alex", age: "26"}
    expect(reducer(initialState, {type: 'REGISTRATION/ADD_USER', userInfo})).toEqual({
      ...initialState,
      loading: true,
      userInfo
    })
  })

  test('ADD_USER_SUCCESS', () => {
    const user = {name: "Alex", id: "as26"}
    expect(reducer(initialState, {type: 'REGISTRATION/ADD_USER_SUCCESS', user})).toEqual({
      ...initialState,
      id: user.id,
      loading: false,
    })
  })

  test('ADD_USER_RESET', () => {
    expect(reducer(initialState, {type: 'REGISTRATION/ADD_USER_RESET'})).toEqual(initialState)
  })

  test('ADD_USER_ERROR', () => {
    const error = 'fatal error'
    expect(reducer(initialState, {type: 'REGISTRATION/ADD_USER_ERROR', error})).toEqual({
      ...initialState,
      loading: false,
      error
    })
  })

  test('UNKNOWN ACTION', () => {
    expect(reducer(initialState, {type: 'UNKNOWN'})).toEqual(initialState)
  })
})