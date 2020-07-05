import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const history = useHistory();
    const [user, setUser] = useState(null);

    async function signIn({ email, password }) {
        try {
            const response = await api.post('/auth', {email, password});

            const { token, user } = response.data;

            api.defaults.headers.Authorization = `Bearer ${token}`;
            setUser(user);
            // history.push('/imagesList');
        } catch (error) {
            toast.error('Usuario não encontrado, e-mail e senha incorretos');
        }
    }

    function signOut() {
        console.log('Deslogar');
    }

    return (
        <AuthContext.Provider value={{
            signed: true,
            user: { email: 'admin@mail.com', name: 'Admin' },
            signIn,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContext;
