import React, {useState} from 'react';

const ThemeContext = React.createContext({});

const ThemeContextProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(localStorage.getItem("darkTheme") === "true");
    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
        localStorage.setItem("darkTheme", (!darkTheme).toString());
    };
    return (
        <ThemeContext.Provider value={{darkTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};

export { ThemeContextProvider, ThemeContext };