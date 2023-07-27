import {useState, createContext} from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState({a: "A!"});

    return(
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );

};

export {ThemeContextProvider, ThemeContext};