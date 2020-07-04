import React from 'react';
import { Link } from 'react-router-dom';
import { FiImage } from 'react-icons/fi';

import Header from '../../components/Header';
import home from '../../assets/home.svg';

import './styles.css';

function Home() {
  return (
    <>
      <Header></Header>
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