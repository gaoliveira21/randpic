import React from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import { FiImage, FiDownload } from 'react-icons/fi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import dog from '../../assets/dog.jpg';
import dog2 from '../../assets/dog2.jpg';
import dog3 from '../../assets/dog3.jpg';
import dog4 from '../../assets/dog4.jpg';


import './styles.css';


function ImagesList() {
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
      <h2 className="title-imagesList">We chose these images for you</h2>
      <main className="container-imagesList">

        <section className="content-imagesList">
          <div className="grid-imagesList">
            <div className="grid-item">
              <div className="card-image hoverzoom">
                <img src={dog} alt="" className="grid-item-image" />
                  <Link to="/imagedownload" className="retina"><FiDownload size={20}/>Baixar imagem</Link>
              </div>
              <div className='card-description'>
                <div className="card-text">
                  <h3>Dogs</h3>
                </div>
                <span><FaRegHeart/></span>
              </div>
            </div>
          </div>
        </section>

      <section className="filters">
        <h2>Filters</h2>
        <div className="grayscale-filter">
          <h4>Grayscale</h4>
          <Switch
            onChange={() => {}}
            checked={false}
            height={20}
            width={50}
            handleDiameter={25}
            offColor={'#E7E5E5'}
            onColor={'#D5B9B2'}
            offHandleColor={'#555555'}
            onHandleColor={'#A26769'}
          ></Switch>
        </div>
        <div className="blur-filter">
          <h4>Blur</h4>
          <select name="blur" id="blur">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          </div>
        <div className="limit-filter">
          <h4>Limit</h4>
          <select name="limit" id="limit">
            <option value="0">4</option>
            <option value="1">8</option>
            <option value="2">12</option>
          </select>
        </div>
        <button><FiImage></FiImage><Link to="/imagesList">Generate ramdom image</Link></button>
      </section>

      

    </main>
    </>
  );
}
export default ImagesList;