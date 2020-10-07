import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import InviteFriends from './components/Form/InviteFriends';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, darkTheme, defaultTheme  } from './utils';

const App = () => {
    const initialValues = {
        firstName: 'Ekaterina',
        lastName: 'Ivanova',
        email: 'ekaterina-ivanova@smartis.si'
    };
    const [useDarkTheme] = useState(false);
    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
            <InviteFriends initial={initialValues}/>
            <GlobalStyle />
        </ThemeProvider>

    );
};

ReactDOM.render(<App />, document.getElementById('root'));