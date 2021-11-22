/*import React, {useState} from 'react';*/
import './Header.css';
//import { Link } from 'react-router-dom';
import {Container} from '../../wrappers/container/Container';

export const Header = () => {
/*    const [currentPage, setCurrentPage] = useState("home");
    const handleClick = (e) => {setCurrentPage(e.key);};*/
    return (
        <header className="main-header"><Container>
            <div className="main-header__flex">
                <div className="main-header__logo">
                    <div className="main-header__logo__img"/><p>Анти-навык</p>
                </div>
                <div className="main-header__navigation">
                    <div className="main-header__navigation__users">
                        <div className="main-header__navigation__img"/><p>Пользователи</p>
                    </div>
                    <div className="main-header__navigation__posts">
                        <div className="main-header__navigation__img"/><p>Посты</p>
                    </div>
                </div>
                <div className="user-login">
                    <p>Вход</p>
                    <p>Регистрация</p>
                </div>
            </div>
        </Container></header>
    );
};