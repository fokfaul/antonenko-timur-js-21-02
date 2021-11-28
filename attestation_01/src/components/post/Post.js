import './Post.css';
import {Helper} from '../../wrappers/helper/Helper';
import {dateMDY} from '../../hooks/date';

export const Post = ({post}) => {
    return(
        <div className="post">
            <Helper objId={post.id}>
                <div className="post__owner">
                    <img className="post__owner__image" src={post.owner.picture} alt="post.owner.firstName"/>
                    <p className="post__owner__name">
                        {post.owner.title+". "+post.owner.firstName+" "+post.owner.lastName}
                    </p>
                    <p className="post__data">{dateMDY(post.publishDate)}</p>
                </div>
                <img className="post__image" src={post.image} alt=""/>
                <p>{post.text}</p>
            </Helper>
        </div>
    );
};

/*
User.defaultProps = {
    darkTheme: "",
    userId: "none",
    imgUrl: "",
    name: "Незнакомец"
}
*/
