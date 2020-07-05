import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Form, Input } from '@rocketseat/unform';
import * as yup from 'yup';

import Header from '../../components/Header';
import AuthContext from '../../contexts/auth';

import login from '../../assets/login.svg';
import './styles.css';

const schema = yup.object().shape({
    email: yup.string().email('Endereço de e-mail inválido').required('O campo e-mail é obrigatório'),
    password: yup.string().min(6, 'A senha precisa ter no minimo 6 caracteres').required('O campo senha é obrigatório')
});

function SignIn() {
    const { signIn } = useContext(AuthContext);

    function handleSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <Header></Header>
            <main className="container">
                <div className="imgLogin">
                    <img src={login} alt="Imagem ilustrativa" />
                </div>
                <div className="form">
                    <Form schema={schema} onSubmit={handleSubmit}>
                        <h2>Sign In</h2>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Input type="text" id="email" name="email" placeholder="Digite seu email" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Input type="password" id="password" name="password" placeholder="Digite sua senha" />
                        </div>
                        <button type="submit">Sign In <FiLogIn></FiLogIn></button>
                        <p>Don't have an account?<Link to="/register"> Sign up here</Link>
                        </p>
                    </Form>
                </div>
            </main>
        </>
    );
}

export default SignIn;
