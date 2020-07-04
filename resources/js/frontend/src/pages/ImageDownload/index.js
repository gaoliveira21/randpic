import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import { FiArrowLeft, FiArrowDown } from 'react-icons/fi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import Header from '../../components/Header';
import dog from '../../assets/dog.jpg';

import './styles.css';

function imageDownload() {
  const [btnVisible, setBtnVisible] = useState(false);

  return (
    <>
      <Header />
      <div className="title">
        <Link to="/imagesList"><FiArrowLeft />Voltar</Link>
        <h1>Nome da Imagem</h1>
        <h3>Nome completo do autor</h3>
      </div>
      <main className="container-imageDownload">
        <section className="content-imageDownload">
          <img src={dog} alt="DOG" />
        </section>

        <section className="content-tools">
          <h2>Filters</h2>
          <div className="grayscale-filter">
            <h4>Grayscale</h4>
            <Switch
              onChange={() => { }}
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
          <div className="dropdown">
            <button className="dropbtn" onClick={() => setBtnVisible(!btnVisible)}>Download<FiArrowDown size={18} /></button>
            <div id="myDropdown" className={btnVisible ? "dropdown-content show" : "dropdown-content"}>
              <div>
                <input type="radio" name="img-download" value="original" id="original" />
                <label htmlFor="original"><strong>Original </strong>(5184 x 3888)</label>
              </div>
              <hr/>
              <div>
                <input type="radio" name="img-download" value="1" id="big" />
                <label htmlFor="big"><strong>Grande </strong>(1920 x 1440)</label>
              </div>
              <hr/>
              <div>
                <input type="radio" name="img-download" value="medium" id="medium" />
                <label htmlFor="medium"><strong>Medium </strong>(1280 x 960)</label>
              </div>
              <hr/>
              <div>
                <input type="radio" name="img-download" value="little" id="little" />
                <label htmlFor="little"><strong>Little </strong>(1280 x 960)</label>
              </div>
              <hr/>
              <div class="btn-download">
                <button>Download Free</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default imageDownload;