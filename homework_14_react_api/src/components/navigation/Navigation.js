import React from 'react';
import './Navigation.css';

export class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(page){
        this.props.moveToPage(page);
    }

    render(){
        return (<div className="navigation">
            {this.props.pages.map((elem, index) => (
                <div className="navigation__page" onClick={() => this.handleClick(elem-1)} key={index}>{elem}</div>
            ))}
        </div>)
    }
}