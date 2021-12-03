import './Footer.css';
import {Container} from '../../wrappers/container/Container';
import DarkTheme from '../darktheme/DarkTheme';

export const Footer = () => {
    return (
        <footer className="main-footer"><Container>
            <div className="footer__copyright">Анти-Навык &copy; 2021</div>
            <DarkTheme/>
        </Container></footer>
    );
};