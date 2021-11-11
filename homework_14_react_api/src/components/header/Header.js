import React from 'react';
import './Header.css';
import {Container} from '../../wrappers/container/Container';

export class Header extends React.Component {
    render(){
        return (<header className="main-header"><Container>
            <div className="main-header__name">
                <h1 className="main-header">Пользователи</h1>
            </div>
        </Container></header>)
    }
}