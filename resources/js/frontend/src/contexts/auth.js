import React, { createContext, useState } from 'react';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState({});

    function signIn() {
        console.log('Logar');
    }

    function signOut() {
        console.log('Deslogar');
    }

    return (
        <AuthContext.Provider value={{ signed: true, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContext;
