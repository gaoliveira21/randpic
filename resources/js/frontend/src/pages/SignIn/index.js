import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import login from '../../assets/login.svg';
import './styles.css';

function SignIn() {
  return (
    <main className="container">
      <div class="imgLogin">
        <img src={login} alt="Imagem ilustrativa" />
      </div>
      <div className="form">
        <form action="#">
          <h2>Sign In</h2>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" />
          <button type="submit">Sign In <FiLogIn></FiLogIn></button>
          <p>Don't have an account?<Link to="/register"> Sign up here</Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default SignIn;
