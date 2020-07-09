import React, { useContext } from 'react';
import { FiEdit } from 'react-icons/fi';
import { Form, Input } from '@rocketseat/unform';
import * as yup from 'yup';

import Header from '../../components/Header';
import AuthContext from '../../contexts/auth';
import './styles.css';

const schema = yup.object().shape({
    name: yup.string().required('O campo nome é obrigatório'),
    email: yup.string().email('Endereço de e-mail inválido').required('O campo e-mail é obrigatório'),
});

function User() {
    const { user, editProfile } = useContext(AuthContext);

    async function handleSubmit(data) {
        editProfile(data);
    }

    return (
        <>
            <Header></Header>
            <main className="container-user">
                <section>
                    <h1>Profile</h1>
                    <Form schema={schema} initialData={user} onSubmit={handleSubmit} className="form-user">
                        <div>
                            <label htmlFor="name">Name:</label>
                            <Input type="text" name="name" id="name" />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <Input type="email" name="email" id="email" />
                        </div>
                        <div className="button">
                            <button type="submit">Edit<FiEdit /></button>
                        </div>
                    </Form>
                </section>
            </main>
        </>
    );
}
export default User;
