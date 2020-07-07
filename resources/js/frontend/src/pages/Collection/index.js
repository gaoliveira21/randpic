import React from 'react';
import { Link } from 'react-router-dom';
import { FiDownload, FiImage } from 'react-icons/fi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import Header from '../../components/Header';
import './styles.css';

import dog from '../../assets/dog.jpg';

function Collection() {
  return (
    <>
      <Header></Header>
      <main className="container-collection">
        <h1>Collections</h1>
        <section className="grid-collection">
          <Link to="/collectionImages">
            <div className="card-collection">
              <div className="card-image-collection">
                <FiImage size={36} />
              </div>
              <div className="card-description-collection">
                <h3>Favorites</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </Link>
        </section>
      </main>
    </>
  );
}
export default Collection;
