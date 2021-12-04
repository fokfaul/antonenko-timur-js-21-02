import './Post.css';
import {Window} from '../../wrappers/window/Window';
import Comments from '../../forms/comments/Comments';
import {dateMDY} from '../../hooks/date';

export const PostWindow = ({post, closeWindow}) => {
    return(
        <Window>
            <div className="post-window">
                <div className="post-window-close" onClick={closeWindow}/>
                <div className="post-window__header">
                    <div className="post-window__owner">
                        <img className="post-window__owner__image" src={post.owner.picture} alt={post.owner.firstName}/>
                        <p className="post-window__owner__name">
                            {post.owner.title+". "+post.owner.firstName+" "+post.owner.lastName}
                        </p>
                    </div>
                    <p className="post-window__data">{dateMDY(post.publishDate)}</p>
                </div>
                <img className="post-window__image" src={post.image} alt=""/>
                <p className="post-window__text">{post.text}</p>
                <Comments/>
            </div>
        </Window>
    );
};
