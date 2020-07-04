import React from 'react';
import { Link } from 'react-router-dom';
import { FiImage } from 'react-icons/fi';

import home from '../../assets/home.svg';

import './styles.css';

function Home() {
  return (
    <>
      <header>
        <nav className="menu">
          <h1>RandPic</h1>
          <ul>
            <li><Link to="/imagesList">Generate</Link></li>
            <li><Link to="/register">Sign Up</Link></li>
            <li><button className="btn-signIn"><Link to="/login">Sign In</Link></button></li>
          </ul>
        </nav>
      </header>
      <main className="container-home">
        <div className="content-home">
          <h2>The faster image Generator</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
          </p>
          <button><FiImage></FiImage><Link to="/imagesList">Generate ramdom image</Link></button>
        </div>
        <div className="imgHome">
          <img src={home} alt="Imagem ilustrativa" />
        </div>
      </main>
    </>
  );
}

export default Home;