import React, {useState} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import {Container} from '../../wrappers/container/Container';
import {ThemeCheckbox} from '../themecheckbox/ThemeCheckbox';
import { Menu } from 'antd';

export const Header = () => {
    const [currentPage, setCurrentPage] = useState("home");
    const handleClick = (e) => {setCurrentPage(e.key);};
    return (
      <header className="main-header"><Container>
          <div className="main-header__grid">
              <Menu onClick={handleClick} selectedKeys={[currentPage]} mode="horizontal">
                  <Menu.Item key="home">
                    <Link to="/home">Пользователи</Link>
                  </Menu.Item>
                  <Menu.Item key="registration">
                    <Link to="/registration">Регистрация</Link>
                  </Menu.Item>
              </Menu>
              <ThemeCheckbox/>
          </div>
      </Container></header>
    );
};