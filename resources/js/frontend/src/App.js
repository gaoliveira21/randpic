import React from 'react';

import { AuthProvider } from './contexts/auth';
import GlobalStyles from './styles/global';
import Routes from './routes';

function App() {
    return (
        <AuthProvider>
            <GlobalStyles />
            <Routes />
        </AuthProvider>
    );
}

export default App;
