import React from 'react';
import { Link } from 'react-router-dom';

import dog from '../../assets/dog.jpg';

import Header from '../../components/Header';
import './styles.css';

function Download() {
  return (
    <>
      <Header></Header>
      <main>
        <section className="container-download">
          <h1>Lista de Downloads</h1>
          <table>
            <thead>
              <tr>
                <th>Imagem</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={dog} alt="Dog" />
                </td>
                <td>
                  Data de download da imagem
              </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
export default Download;