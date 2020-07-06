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

            localStorage.setItem('@Randpic:user', JSON.stringify(user));
            localStorage.setItem('@Randpic:token', access_token);

            setUser(user);
            return true;
        } catch (error) {
            toast.error('Usuario não encontrado, e-mail e senha incorretos');
            return false;
        }
    }

    async function signUp({ name, email, password }) {
        try {
            const response = await api.post('/users', {name, email, password});

            const { access_token, user } = response.data;

            api.defaults.headers.Authorization = `Bearer ${access_token}`;

            localStorage.setItem('@Randpic:user', JSON.stringify(user));
            localStorage.setItem('@Randpic:token', access_token);

            setUser(user);
            return true;
        } catch (error) {
            toast.error('Falha ao cadastrar usuário, tente novamente');
            return false;
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
            signUp,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContext;
