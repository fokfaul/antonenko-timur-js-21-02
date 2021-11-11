import React from 'react';
import './ThemeCheckbox.css';
import {ThemeContextConsumer} from '../../contexts/ThemeContext';

export class ThemeCheckbox extends React.Component {
  render(){
    return (
      <ThemeContextConsumer>
        {
        (context) => (
          <div className="theme-checkbox">
            Тёмная тема
            <input className="theme-checkbox__input"
            checked={context.darkTheme}
            type="checkbox"
            onClick={context.toggleTheme} />
          </div>
        )}
      </ThemeContextConsumer>
    );
  }
}