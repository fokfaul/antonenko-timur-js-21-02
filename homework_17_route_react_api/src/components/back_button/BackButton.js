import React from 'react';
import { useHistory } from "react-router-dom";
import './BackButton.css';
import {Container} from '../../wrappers/container/Container';

export const BackButton = () => {
    const history = useHistory();
    return (
      <header className="back-header"><Container>
          <span className="back-header__arrow" onClick={history.goBack}></span>
      </Container></header>
    );
};