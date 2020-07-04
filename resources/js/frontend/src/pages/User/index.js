import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';

import Header from '../../components/Header';
import './styles.css';

function User() {
  return (
    <>
      <Header></Header>
      <main className="container-user">
        <section>
          <h1>Perfil</h1>
          <form action="" className="form-user">
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name"/>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email"/>
            </div>
            <div>
              <label htmlFor="oldPassword">Old Password:</label>
              <input type="password" name="oldPassword" id="oldPassword"/>
            </div>
            <div>
              <label htmlFor="newPassword">New Password:</label>
              <input type="password" name="newPassword" id="newPassword"/>
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input type="password" name="confirmPassword" id="confirmPassword"/>
            </div>
            <div className="button">
              <button type="submit">Enviar<FiEdit/></button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
export default User;