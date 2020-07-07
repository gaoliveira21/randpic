import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Form, Input } from '@rocketseat/unform';
import * as yup from 'yup';

import Header from '../../components/Header';
import AuthContext from '../../contexts/auth';
import './styles.css';

import register from '../../assets/register.svg';

const schema = yup.object().shape({
    name: yup.string().required('O campo nome é obrigatório'),
    email: yup.string().email('Endereço de e-mail inválido').required('O campo e-mail é obrigatório'),
    password: yup.string().min(6, 'A senha precisa ter no minimo 6 caracteres').required('O campo senha é obrigatório')
});

function SignUp() {
    const { signUp } = useContext(AuthContext);
    const history = useHistory();

    async function handleSubmit(data) {
        if(await signUp(data)){
            history.push('/');
        }
    }

    return (
        <>
            <Header></Header>
            <main className="container">
                <div className="form">
                    <Form schema={schema} onSubmit={handleSubmit}>
                        <h2>Sign Up</h2>
                        <div>
                            <label htmlFor="name">Name</label>
                            <Input type="text" id="name" name="name" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Input type="text" id="email" name="email" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Input type="password" id="password" name="password" />
                        </div>
                        <button type="submit">Sign Up <FiLogIn></FiLogIn></button>
                        <p>Have an account?<Link to="/login"> Sign in here</Link>
                        </p>
                    </Form>
                </div>
                <div className="imgRegister">
                    <img src={register} alt="Imagem ilustrativa" />
                </div>
            </main>
        </>
    );
}

export default SignUp;
