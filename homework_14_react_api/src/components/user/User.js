import React from 'react';
import './User.css';
import Helper from '../../wrappers/helper/Helper';

export class User extends React.Component {
//  constructor(props) {
//    super(props);
//  }

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
}
