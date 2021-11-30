import './Comment.css';
import {dateDMT} from '../../hooks/date';

export const Comment = ({comment}) => {
    return(
        <div className="post-comment">
            <img className="post-comment__owner__image" src={comment.owner.picture} alt={comment.owner.firstName}/>
            <p className="post-comment__owner__name">
                {comment.owner.title+". "+comment.owner.firstName+" "+comment.owner.lastName}
            </p>
            <p className="post-comment__text">{comment.message}</p>
            <p className="post-comment__data">{dateDMT(comment.publishDate)}</p>
        </div>
    );
};

