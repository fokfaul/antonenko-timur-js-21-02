import React from 'react';
import './Shop.css';
import {Container} from '../container/Container';
import {Sidebar} from '../sidebar/Sidebar';
import {ShopInfo} from '../body/Shop-info';

export class Shop extends React.Component {
    render(){
        return (<section className="store"><Container>
            <Sidebar/>
            <ShopInfo/>
        </Container></section>)
    }
}