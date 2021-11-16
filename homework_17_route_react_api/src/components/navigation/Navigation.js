import React from 'react';
import './Navigation.css';

export const Navigation = ({current, pages, moveToPage}) => {
    const handleClick = (page) => {moveToPage(page)};

    return(
      <div className="navigation">
          {pages.map((elem, index) => {
            if(elem === -1)
              return (<div className="navigation__page active">...</div>)
            else
              if(elem === current)
                return (<div className="navigation__page active" key={index}>{elem}</div>)
              else
                return (<div className="navigation__page" onClick={() => handleClick(elem-1)} key={index}>{elem}</div>)
          })}
      </div>
    );
};