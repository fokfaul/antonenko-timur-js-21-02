import React from 'react';
import './User.css';
import {Helper} from '../../wrappers/helper/Helper';
import { Link } from 'react-router-dom';

export const User = ({darkTheme, userId, imgUrl, name}) => {
    return(
        <Link to={`/user/${userId}`}>
          <div className={"user "+darkTheme}>
            <Helper userId={userId}>
                <img src={imgUrl} alt={name}/>
                <p>{name}</p>
            </Helper>
          </div>
        </Link>
    );
};

User.defaultProps = {
    darkTheme: "",
    userId: "none",
    imgUrl: "",
    name: "Незнакомец"
}
