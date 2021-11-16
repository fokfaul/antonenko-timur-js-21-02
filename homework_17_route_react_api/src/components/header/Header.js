import React from 'react';
import './Header.css';
import {Container} from '../../wrappers/container/Container';

export const Header = () => {
    return (
      <header className="main-header"><Container>
          <div className="main-header__name">
              <h1 className="main-header">Пользователи</h1>
          </div>
      </Container></header>
    );
};