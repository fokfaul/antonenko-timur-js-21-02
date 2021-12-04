import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS } from '../constants/actions/comments';


// Создание store
class AppStore extends EventEmitter {
  private state;

  constructor() {
    super();
    this.state = {};
    this.getState = this.getState.bind(this);
    this.loadUsersSuc = this.loadUsersSuc.bind(this);
  }

  getState = () => this.state;

  loadUsersSuc = (comments) => {
    this.state = {
      commentList: comments,
      isLoading: false,
    };
    this.emit('change');
  };

  handleAction(action: LoadCommentActionType) {
    switch (action.type) {
      case LOAD_COMMENTS:
        this.state = { ...this.state, isLoading: true };
        this.emit('change');
        break;
      case LOAD_COMMENTS_SUCCESS:
        this.loadCommentsSucces(action.payload);
        break;
      default:
        () => {
        };
    }
  }
}

const commentsStore = new AppStore();

dispatcher.register(commentsStore.handleAction.bind(commentsStore));

export default commentsStore;