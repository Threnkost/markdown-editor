import styled from 'styled-components';

import {useContext} from 'react';
import { ThemeContext } from './ThemeContextProvider.js';


const Sidebar = () => {

    const theme = useContext(ThemeContext);
    console.log(theme);
    
    return (
        <aside>

        </aside>
    );
};


export default Sidebar;