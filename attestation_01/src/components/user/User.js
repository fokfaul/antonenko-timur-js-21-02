import './User.css';
import {Helper} from '../../wrappers/helper/Helper';
import { useHistory } from 'react-router-dom';

export const User = ({userId, imgUrl, name}) => {
    const history = useHistory();

    const moveToUserPage = () => {
        history.push("/user/"+userId);
    }

    return(
        <div className={"user"} onClick={moveToUserPage}>
            <Helper userId={userId}>
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
