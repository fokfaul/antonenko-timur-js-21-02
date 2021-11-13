import React from 'react';
import './User.css';
import {Helper} from '../../wrappers/helper/Helper';

/*export class User extends React.Component {

  render() {
    return (
      <div className={"user "+this.props.darkTheme}>
        <Helper userId={this.props.userId}>
            <img src={this.props.imgUrl} alt={this.props.name}/>
            <p>{this.props.name}</p>
        </Helper>
      </div>
    );
  }
}*/

export const User = ({darkTheme, userId, imgUrl, name}) => {
    return(
      <div className={"user "+darkTheme}>
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
