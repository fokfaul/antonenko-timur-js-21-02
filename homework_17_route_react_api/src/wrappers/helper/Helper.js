import React from 'react';
import './Helper.css';

export const Helper = ({children, userId}) => {
    return (
      <div className="component-with-helper">
        {children}
        <div className="component-with-helper__helper">{userId}</div>
      </div>
    );
};