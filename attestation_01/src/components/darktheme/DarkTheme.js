import React from 'react';
import './DarkTheme.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeAction, resetAction } from '../../actions/ThemeActions';
import useOnceOnMount from '../../hooks/useOnceOnMount';

const DarkTheme = ({theme, changeTheme, resetTheme}) => {
    const toggleDark = () => {
        if(theme === "dark")
        {
            localStorage.setItem('theme', "");
            resetTheme();
        }
        else
        {
            localStorage.setItem('theme', "dark");
            changeTheme("dark");
        }
    }
    useOnceOnMount(() => {
       if(localStorage.getItem("theme") === "dark")
           changeTheme("dark");
    });
    return(
        <div className="theme-checkbox">
            <p>Тёмная тема</p>
            <label className="checkbox-google">
            	<input defaultChecked={localStorage.getItem("theme") === "dark"} onChange={toggleDark} type="checkbox"/>
            	<span className="checkbox-google-switch"></span>
            </label>
        </div>
    );
};

export default connect(
  (state) => ({
    theme: state.theme.theme,
  }),
  (dispatch) => ({
    changeTheme: bindActionCreators(changeAction, dispatch),
    resetTheme: bindActionCreators(resetAction, dispatch),
  }),
)(DarkTheme);