import React from 'react';
import './Sidebar.css';

const menu = [{"name": "Морская рыба", "contain": ["Акула", "Окунь", "Палтус", "Треска"]},
              {"name": "Пресноводная рыба", "contain": ["Белоглазка", "Осётр", "Речной угорь", "Налим"]}];

export class Sidebar extends React.Component {
    render(){
        return (<aside className="store__menu">
        {menu.map((obj, index) => (<div key={index}>
            <h4>{obj.name}</h4>
            <ul>{obj.contain.map((name, number) => (<li key={number}><input type="checkbox"/> {name}</li>))}</ul>
        </div>))}
        </aside>)
    }
}