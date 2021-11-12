import React from 'react';
import './Helper.css';

export default class Helper extends React.Component {
  render() {
    return (
      <div className="component-with-helper">
        {this.props.children}
        <div className="component-with-helper__helper">{this.props.userId}</div>
      </div>
    );
  }
}