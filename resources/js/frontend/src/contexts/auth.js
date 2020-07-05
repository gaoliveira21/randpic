import React, { createContext, useState } from 'react';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState({});

    function signIn({ email, password }) {
        console.log(email, password);
    }

    function signOut() {
        console.log('Deslogar');
    }

    return (
        <AuthContext.Provider value={{ signed: false, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContext;
