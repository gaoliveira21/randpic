import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async function loadStorageData() {
            const storagedUser = localStorage.getItem('@Randpic:user');
            const storagedToken = localStorage.getItem('@Randpic:token');

            if(storagedUser && storagedToken) {
                setUser(JSON.parse(storagedUser));
            }

        })();
    }, []);

    async function signIn({ email, password }) {
        try {
            const response = await api.post('/auth', {email, password});

            const { access_token, user } = response.data;

            api.defaults.headers.Authorization = `Bearer ${access_token}`;
            setUser(user);

            localStorage.setItem('@Randpic:user', JSON.stringify(user));
            localStorage.setItem('@Randpic:token', access_token);
        } catch (error) {
            toast.error('Usuario não encontrado, e-mail e senha incorretos');
        }
    }

    function signOut() {
        localStorage.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            signIn,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContext;
