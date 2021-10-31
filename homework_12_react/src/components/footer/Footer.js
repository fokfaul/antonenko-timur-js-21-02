import React from 'react';
import './Footer.css';
import {Container} from '../container/Container';

export class Footer extends React.Component {
    render(){
        return (<footer className="main-footer"><Container>
            <div className="footer-bottom">
                <p className="contact-info">Контакты</p>
                <p className="copyright">&copy; 2021 ИП Рыбов О.А.</p>
            </div>
        </Container></footer>)
    }
}