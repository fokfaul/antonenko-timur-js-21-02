import React from 'react';
import './LimitSelect.css';
import {limitUsers} from '../../constants/navigation/common';

export class LimitSelect extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(limit){
        this.props.changeLimit(limit);
    }

    render(){
        return (<div className="limit-form"><label>Количество элементов:</label>
        <select className="limit-select" onChange={(e) => this.handleChange(e.target.value)}>
            {limitUsers.map((elem, index) => (
                <option value={elem} key={index}>{elem}</option>
            ))}
        </select></div>)
    }
}