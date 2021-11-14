import React from 'react';
import './Navigation.css';

export const Navigation = ({pages, moveToPage}) => {
    const handleClick = (page) => {moveToPage(page)};

    return(
      <div className="navigation">
          {pages.map((elem, index) => (
              <div className="navigation__page" onClick={() => handleClick(elem-1)} key={index}>{elem}</div>
          ))}
      </div>
    );
};