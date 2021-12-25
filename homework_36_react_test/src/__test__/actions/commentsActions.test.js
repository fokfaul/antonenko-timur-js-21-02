import * as commentsActions from '../../actions/CommentsActions'
import { LOAD_COMMENTS, LOAD_COMMENTS_ERROR, LOAD_COMMENTS_SUCCESS } from '../../constants/actions/comments';

describe('CommentsActions test', () => {

  test('loadAction', () => {
    expect(commentsActions.loadAction("ad32", 5, 10)).toEqual({
      type: LOAD_COMMENTS,
      id: "ad32",
      page: 5,
      limit: 10
    })
  })

  test('loadSuccessAction', () => {
    expect(commentsActions.loadSuccessAction({massage: "hello"})).toEqual({
      type: LOAD_COMMENTS_SUCCESS,
      commentsList: {massage: "hello"},
    })
  })

  test('loadErrorAction', () => {
    expect(commentsActions.loadErrorAction("error")).toEqual({
      type: LOAD_COMMENTS_ERROR,
      error: "error",
    })
  })
})