import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('@Randpic:user')));

    useEffect(() => {
        const storagedToken = localStorage.getItem('@Randpic:token');
        if (storagedToken)
            api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }, []);

    async function signIn({ email, password }) {
        try {
            const response = await api.post('/auth', { email, password });

            const { access_token, user } = response.data;

            api.defaults.headers.Authorization = `Bearer ${access_token}`;

            localStorage.setItem('@Randpic:user', JSON.stringify(user));
            localStorage.setItem('@Randpic:token', access_token);

            setUser(user);
            return true;
        } catch (error) {
            toast.error('Fails on login, was not found a user with this email and password');
            return false;
        }
    }

    async function signUp({ name, email, password }) {
        try {
            const response = await api.post('/users', { name, email, password });

            const { access_token, user } = response.data;

            api.defaults.headers.Authorization = `Bearer ${access_token}`;

            localStorage.setItem('@Randpic:user', JSON.stringify(user));
            localStorage.setItem('@Randpic:token', access_token);

            setUser(user);
            return true;
        } catch (error) {
            toast.error('Fails on create user');
            return false;
        }
    }

    function signOut() {
        localStorage.clear();
        setUser(null);
    }

    async function editProfile({ name, email }) {
        try {
            const response = await api.put('/users', { name, email });
            const { updated_at, created_at, id} = response.data;

            const user = { name, email, id, updated_at, created_at };

            localStorage.setItem('@Randpic:user', JSON.stringify(user));
            setUser(user);

            toast.success('Success on update profile');
        } catch (error) {
            toast.error('Fails on update profile');
        }
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            signIn,
            signUp,
            signOut,
            editProfile
        }}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContext;
