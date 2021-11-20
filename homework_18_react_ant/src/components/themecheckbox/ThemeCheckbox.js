import React, {useContext} from 'react';
import './ThemeCheckbox.css';
import {ThemeContext} from '../../contexts/ThemeContext';

export const ThemeCheckbox = () => {
    const themeContext = useContext(ThemeContext);

    return(
        <div className="theme-checkbox">
            <label htmlFor="theme-checkbox__input">Тёмная тема </label>
            <input id="theme-checkbox__input"
            checked={themeContext.darkTheme}
            type="checkbox"
            onClick={themeContext.toggleTheme} />
        </div>
    );
};