import React from 'react';
import { Link } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import './styles.css';

import dog from '../../assets/dog.jpg';

function Collection() {
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
      <main className="container-collection">
        <div className="title-collection">
          <h1>Collections</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. </h3>
        </div>
        <section>
          <div className="grid-collection">
            <div className="collection-item">
              <div className="card-image hoverzoom">
                <img src={dog} alt="" className="collection-item-image" />
                  <Link to="/imagedownload" className="retina"><FiDownload size={20}/>Baixar imagem</Link>
              </div>
              <div className='card-description'>
                <div className="card-text">
                  <h3>Dogs</h3>
                </div>
                <span><FaRegHeart/></span>
              </div>
            </div>
            <div className="collection-item">
              <div className="card-image hoverzoom">
                <img src={dog} alt="" className="collection-item-image" />
                  <Link to="/imagedownload" className="retina"><FiDownload size={20}/>Baixar imagem</Link>
              </div>
              <div className='card-description'>
                <div className="card-text">
                  <h3>Dogs</h3>
                </div>
                <span><FaRegHeart/></span>
              </div>
            </div>
            <div className="collection-item">
              <div className="card-image hoverzoom">
                <img src={dog} alt="" className="collection-item-image" />
                  <Link to="/imagedownload" className="retina"><FiDownload size={20}/>Baixar imagem</Link>
              </div>
              <div className='card-description'>
                <div className="card-text">
                  <h3>Dogs</h3>
                </div>
                <span><FaRegHeart/></span>
              </div>
            </div>
            <div className="collection-item">
              <div className="card-image hoverzoom">
                <img src={dog} alt="" className="collection-item-image" />
                  <Link to="/imagedownload" className="retina"><FiDownload size={20}/>Baixar imagem</Link>
              </div>
              <div className='card-description'>
                <div className="card-text">
                  <h3>Dogs</h3>
                </div>
                <span><FaRegHeart/></span>
              </div>
            </div>
            <div className="collection-item">
              <div className="card-image hoverzoom">
                <img src={dog} alt="" className="collection-item-image" />
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
      </main>
    </>
  );
}
export default Collection;