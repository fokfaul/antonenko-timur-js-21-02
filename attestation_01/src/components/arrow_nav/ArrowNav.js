import React from 'react';
import './ArrowNav.css';

export const ArrowNav = ({mode, moveToPage}) => {
    console.log(mode);
    return (
        <div className={"arrow"+(mode==="reverse"? " reverse" : "")} onClick={moveToPage}>
            <div className="arrow-top"></div>
            <div className="arrow-bottom"></div>
        </div>
    );
};