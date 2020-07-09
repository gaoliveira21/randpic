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
                    <h2>The faster Image Generator</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Link to="/imagesList">
                        <button><FiImage size={16}></FiImage>Generate ramdom image</button>
                    </Link>
                </div>
                <div className="imgHome">
                    <img src={home} alt="Imagem ilustrativa" />
                </div>
            </main>
        </>
    );
}

export default Home;
