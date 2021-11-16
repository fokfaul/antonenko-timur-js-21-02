import React from 'react';
import './Header.css';
import {Container} from '../../wrappers/container/Container';
import {ThemeCheckbox} from '../themecheckbox/ThemeCheckbox';

export const Header = () => {
    return (
      <header className="main-header"><Container>
          <div className="main-header__grid">
              <h1 className="main-header__name">Пользователи</h1>
              <ThemeCheckbox/>
          </div>
      </Container></header>
    );
};