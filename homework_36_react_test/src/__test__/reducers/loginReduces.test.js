import reducer from '../../reducers/loginReduces'

const initialState = {
  loading: false,
  userInfo: {},
  id: false,
  error: ""
};

describe('commentsReduces test', () => {

  test('LOGIN_USER', () => {
    expect(reducer(initialState, {type: 'LOGIN/LOGIN_USER', id: "ad32"})).toEqual({
      ...initialState,
      loading: true,
      id: "ad32"
    })
  })

  test('LOGIN_USER_RESET', () => {
    expect(reducer(initialState, {type: 'LOGIN/LOGIN_USER_RESET'})).toEqual(initialState)
  })

  test('LOGIN_USER_SUCCESS', () => {
    const resp = {
        id: "ad32",
    }
    expect(reducer(initialState, {type: 'LOGIN/LOGIN_USER_SUCCESS', userInfo: resp})).toEqual({
      ...initialState,
      userInfo: resp,
    })
  })

  test('LOGIN_USER_ERROR', () => {
    const error = 'fatal error'
    expect(reducer(initialState, {type: 'LOGIN/LOGIN_USER_ERROR', error})).toEqual({
      ...initialState,
      error
    })
  })

  test('UNKNOWN ACTION', () => {
    expect(reducer(initialState, {type: 'UNKNOWN'})).toEqual(initialState)
  })
})