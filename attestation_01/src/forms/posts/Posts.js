import './Posts.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadAction } from '../../actions/PostsActions';
import {Container} from '../../wrappers/container/Container';
import {Post} from '../../components/post/Post';
import {Loader} from '../../components/loader/Loader';
import { Pagination } from 'antd';

import useOnceOnMount from '../../hooks/useOnceOnMount';
import useScrollToTop from '../../hooks/useScrollToTop';

const Posts = ({postsList, page, limit, total, loading, load, error}) => {
    useScrollToTop();

    const moveToPage = (toPage, pageSize) => load(toPage-1, limit);

    useOnceOnMount(() => load(page, limit));

    return (
      <section className="posts">
          {loading? <Loader/> : error? alert(error) :
              <Container>
                <div className="posts__list">
                  {postsList.map((elem, index) => (
                    <Post post={elem} key={index}/>
                  ))}
                </div>
                <Pagination size="small" defaultCurrent={page+1} pageSize={limit} total={total} showSizeChanger={false}
                    showLessItems={true} onChange={moveToPage}/>
              </Container>
          }
      </section>
    );
}

export default connect(
  (state) => ({
    postsList: state.posts.postsList,
    page: state.posts.page,
    total: state.posts.total,
    loading: state.posts.loading,
    limit: state.posts.limit,
    error: state.posts.error,
  }),
  (dispatch) => ({
    load: bindActionCreators(loadAction, dispatch),
  }),
)(Posts);