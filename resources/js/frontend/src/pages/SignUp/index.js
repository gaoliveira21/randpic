import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import Header from '../../components/Header';
import './styles.css';

import register from '../../assets/register.svg';

function SignUp() {
  return (
    <>
    <Header></Header>
    <main className="container">
      <div className="form">
        <form action="#">
          <h2>Sign Up</h2>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" />
          <button type="submit">Sign Up <FiLogIn></FiLogIn></button>
          <p>Have an account?<Link to="/login"> Sign in here</Link>
          </p>
        </form>
      </div>
      <div className="imgRegister">
        <img src={register} alt="Imagem ilustrativa" />
      </div>
    </main>
    </>
  );
}

export default SignUp;
