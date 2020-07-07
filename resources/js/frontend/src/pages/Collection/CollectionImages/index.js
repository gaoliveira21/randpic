import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiDownload, FiArrowLeft, FiX} from 'react-icons/fi';

import Header from '../../../components/Header';
import './styles.css';

import dog from '../../../assets/dog.jpg';

function CollectionImages() {

  const history = useHistory();

  function backPage(){
    history.goBack();
  }

  return (
    <>
      <Header></Header>
      <main className="container-collection-images">
        <Link onClick={backPage} class="back-page"><FiArrowLeft />Voltar</Link>
        <div className="title-collection-images">
          <h1>Favorites</h1>
        </div>
        <section>
          <div className="grid-collection-images">
            <div className="item-collection-images">
              <div className="card-image hoverzoom">
                <img src={dog} alt="" className="collection-item-image" />
                <Link to="/imagedownload" className="retina"><FiDownload size={20} />Baixar imagem</Link>
              </div>
              <div className='card-description-collection-images'>
                <div className="card-text-collection-images">
                  <h3>Dogs</h3>
                </div> 
                <div className="card-delete-collection-images">
                  <FiX size={24}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default CollectionImages;
