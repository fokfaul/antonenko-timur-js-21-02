import React from 'react';
import './Shop.css';
import {Container} from '../container/Container';
import {Sidebar} from '../sidebar/Sidebar';

export class Shop extends React.Component {
    render(){
        return (<section className="store"><Container>
            <Sidebar/>
            <main></main>
        </Container></section>)
    }
}