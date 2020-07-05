import React from 'react';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from './contexts/auth';
import GlobalStyles from './styles/global';
import Routes from './routes';

function App() {
    return (
        <AuthProvider>
            <GlobalStyles />
            <Routes />
            <ToastContainer autoClose={3000}/>
        </AuthProvider>
    );
}

export default App;
