import React from 'react';
import './User.css';

export class User extends React.Component {
//  constructor(props) {
//    super(props);
//  }

  render() {
    return (
      <div className="user">
        <img src={this.props.imgUrl} alt={this.props.name}/>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
