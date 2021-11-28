import './User.css';
import {Helper} from '../../wrappers/helper/Helper';

export const User = ({userId, imgUrl, name}) => {
    return(
        <div className="user">
            <Helper objId={userId}>
                <img src={imgUrl} alt={name}/>
                <p>{name}</p>
            </Helper>
        </div>
    );
};

User.defaultProps = {
    darkTheme: "",
    userId: "none",
    imgUrl: "",
    name: "Незнакомец"
}
