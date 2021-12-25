import { getUsersList, getPostsList, getCommentsList, getUserById,
            getPostById, addUser, updateUser } from '../../api/ownApi'

import {BASE_URL} from '../../constants/api/ownApi'
import { ownRequestHeaders } from '../../hooks/headersRequest'

describe('ownApi tests', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  test('getUsersList: should call fetch with url and options', () => {
    const fetchResponse = {
      data: 'any data'
    }
    fetch.mockResponse(JSON.stringify(fetchResponse))
    const fetchOptions = {
      method: 'GET',
      headers: ownRequestHeaders(),
    }
    const url = BASE_URL+'user?page=1&limit=10'
    getUsersList(1, 10)
    expect(fetch).toBeCalledWith(url, fetchOptions)
  })

  test('getUsersList: should return response.data', (done) => {
    const fetchResponse = {
      data: 'any data'
    }
    fetch.mockResponse(JSON.stringify(fetchResponse))
    const result = getUsersList(1, 10)
    expect(result).toEqual(expect.any(Promise))
    result.then(resp => {
      expect(resp.data).toBe(fetchResponse.data)
      done()
    })
  })

  test('getUsersList: should return fetch error', (done) => {
    const error = 'fetch error'
    fetch.mockReject(() => Promise.reject(error))
    const result = getUsersList(1, 10)
    expect(result).toEqual(expect.any(Promise))
    result.catch(err => {
      expect(err).toBe(error)
      done()
    })
  })
//getPostsList
  test('getPostsList: should call fetch with url and options', () => {
    const fetchResponse = {
      data: 'any data'
    }
    fetch.mockResponse(JSON.stringify(fetchResponse))
    const fetchOptions = {
      method: 'GET',
      headers: ownRequestHeaders(),
    }
    const url = BASE_URL+'post?page=1&limit=10'
    getPostsList(1, 10)
    expect(fetch).toBeCalledWith(url, fetchOptions)
  })

  test('getPostsList: should return response.data', (done) => {
    const fetchResponse = {
      data: 'any data'
    }
    fetch.mockResponse(JSON.stringify(fetchResponse))
    const result = getPostsList(1, 10)
    expect(result).toEqual(expect.any(Promise))
    result.then(resp => {
      expect(resp.data).toBe(fetchResponse.data)
      done()
    })
  })

  test('getPostsList: should return fetch error', (done) => {
    const error = 'fetch error'
    fetch.mockReject(() => Promise.reject(error))
    const result = getPostsList(1, 10)
    expect(result).toEqual(expect.any(Promise))
    result.catch(err => {
      expect(err).toBe(error)
      done()
    })
  })
//getCommentsList
  test('getCommentsList: should call fetch with url and options', () => {
    const fetchResponse = {
      data: 'any data'
    }
    fetch.mockResponse(JSON.stringify(fetchResponse))
    const fetchOptions = {
      method: 'GET',
      headers: ownRequestHeaders(),
    }
    const url = BASE_URL+'post/ad32/comment?page=1&limit=10'
    getCommentsList("ad32", 1, 10)
    expect(fetch).toBeCalledWith(url, fetchOptions)
  })

  test('getCommentsList: should return response.data', (done) => {
    const fetchResponse = {
      data: 'any data'
    }
    fetch.mockResponse(JSON.stringify(fetchResponse))
    const result = getCommentsList("ad32", 1, 10)
    expect(result).toEqual(expect.any(Promise))
    result.then(resp => {
      expect(resp.data).toBe(fetchResponse.data)
      done()
    })
  })

  test('getCommentsList: should return fetch error', (done) => {
    const error = 'fetch error'
    fetch.mockReject(() => Promise.reject(error))
    const result = getCommentsList("ad32", 1, 10)
    expect(result).toEqual(expect.any(Promise))
    result.catch(err => {
      expect(err).toBe(error)
      done()
    })
  })
//getUserById
  test('getUserById: should call fetch with url and options', () => {
    const fetchResponse = {
      data: 'any data'
    }
    fetch.mockResponse(JSON.stringify(fetchResponse))
    const fetchOptions = {
      method: 'GET',
      headers: ownRequestHeaders(),
    }
    const url = BASE_URL+'user/ad32'
    getUserById("ad32")
    expect(fetch).toBeCalledWith(url, fetchOptions)
  })

  test('getUserById: should return response.data', (done) => {
    const fetchResponse = {
      data: 'any data'
    }
    fetch.mockResponse(JSON.stringify(fetchResponse))
    const result = getUserById("ad32")
    expect(result).toEqual(expect.any(Promise))
    result.then(resp => {
      expect(resp.data).toBe(fetchResponse.data)
      done()
    })
  })

  test('getUserById: should return fetch error', (done) => {
    const error = 'fetch error'
    fetch.mockReject(() => Promise.reject(error))
    const result = getUserById("ad32")
    expect(result).toEqual(expect.any(Promise))
    result.catch(err => {
      expect(err).toBe(error)
      done()
    })
  })
//getPostById
  test('getPostById: should call fetch with url and options', () => {
    const fetchResponse = {
      data: 'any data'
    }
    fetch.mockResponse(JSON.stringify(fetchResponse))
    const fetchOptions = {
      method: 'GET',
      headers: ownRequestHeaders(),
    }
    const url = BASE_URL+'post/ad32'
    getPostById("ad32")
    expect(fetch).toBeCalledWith(url, fetchOptions)
  })

  test('getPostById: should return response.data', (done) => {
    const fetchResponse = {
      data: 'any data'
    }
    fetch.mockResponse(JSON.stringify(fetchResponse))
    const result = getPostById("ad32")
    expect(result).toEqual(expect.any(Promise))
    result.then(resp => {
      expect(resp.data).toBe(fetchResponse.data)
      done()
    })
  })

  test('getPostById: should return fetch error', (done) => {
    const error = 'fetch error'
    fetch.mockReject(() => Promise.reject(error))
    const result = getPostById("ad32")
    expect(result).toEqual(expect.any(Promise))
    result.catch(err => {
      expect(err).toBe(error)
      done()
    })
  })
//addUser
  test('addUser: should call fetch with url and options', () => {
    const fetchResponse = {
      data: 'any data'
    }
    fetch.mockResponse(JSON.stringify(fetchResponse))
    const fetchOptions = {
      body: JSON.stringify(fetchResponse),
      method: 'POST',
      headers: ownRequestHeaders(true),
    }
    const url = BASE_URL+'user/create'
    addUser(fetchResponse)
    expect(fetch).toBeCalledWith(url, fetchOptions)
  })

  test('addUser: should return response.data', (done) => {
    const fetchResponse = {
      data: 'any data'
    }
    fetch.mockResponse(JSON.stringify(fetchResponse))
    const result = addUser({name : "ad32"})
    expect(result).toEqual(expect.any(Promise))
    result.then(resp => {
      expect(resp.data).toBe(fetchResponse.data)
      done()
    })
  })

  test('addUser: should return fetch error', (done) => {
    const error = 'fetch error'
    fetch.mockReject(() => Promise.reject(error))
    const result = addUser({name : "ad32"})
    expect(result).toEqual(expect.any(Promise))
    result.catch(err => {
      expect(err).toBe(error)
      done()
    })
  })
//addUser
  test('updateUser: should call fetch with url and options', () => {
    const fetchResponse = {
      data: 'any data'
    }
    fetch.mockResponse(JSON.stringify(fetchResponse))
    const fetchOptions = {
      body: JSON.stringify(fetchResponse),
      method: 'PUT',
      headers: ownRequestHeaders(true),
    }
    const url = BASE_URL+'user/ad32'
    updateUser("ad32", fetchResponse)
    expect(fetch).toBeCalledWith(url, fetchOptions)
  })

  test('updateUser: should return response.data', (done) => {
    const fetchResponse = {
      data: 'any data'
    }
    fetch.mockResponse(JSON.stringify(fetchResponse))
    const result = updateUser("ad32", {"name" : "Alex"})
    expect(result).toEqual(expect.any(Promise))
    result.then(resp => {
      expect(resp.data).toBe(fetchResponse.data)
      done()
    })
  })

  test('updateUser: should return fetch error', (done) => {
    const error = 'fetch error'
    fetch.mockReject(() => Promise.reject(error))
    const result = updateUser("ad32", {"name" : "Alex"})
    expect(result).toEqual(expect.any(Promise))
    result.catch(err => {
      expect(err).toBe(error)
      done()
    })
  })
})