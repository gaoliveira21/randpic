import React, { useEffect, useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiDownload, FiArrowLeft, FiX } from 'react-icons/fi';

import api from '../../../services/api';

import AuthContext from '../../../contexts/auth';
import Header from '../../../components/Header';
import './styles.css';

function CollectionImages({ location }) {
    const [images, setImages] = useState([]);

    const { token } = useContext(AuthContext);
    const history = useHistory();

    function backPage() {
        history.goBack();
    }

    useEffect(() => {
        async function loadImages() {
            const { collection_id } = location.state;
            const response = await api.get(`/collections/${collection_id}/images`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setImages(response.data);
        }
        loadImages();
    }, []);

    function handleNavigate({ image_id, download_url }) {
        console.log(image_id, download_url);
        history.push('/imageDownload', {
            id: image_id,
            url: download_url
        })
    }

    return (
        <>
            <Header></Header>
            <main className="container-collection-images">
                <span onClick={backPage} className="back-page"><FiArrowLeft />Voltar</span>
                <div className="title-collection-images">
                    <h1>Favorites</h1>
                </div>
                <section>
                    <div className="grid-collection-images">
                        {images.map(image => (
                            <div key={image.id} className="item-collection-images">
                                <div className="card-image hoverzoom">
                                    <img src={`https://picsum.photos/id/${image.image_id}/800/800`} alt="" className="collection-item-image" />
                                    <span onClick={() => handleNavigate(image)} className="retina"><FiDownload size={20} />Baixar imagem</span>
                                </div>
                                <div className='card-description-collection-images'>
                                    <div className="card-text-collection-images">
                                        {/* <h3>Dogs</h3> */}
                                    </div>
                                    <div className="card-delete-collection-images">
                                        <FiX size={24} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
export default CollectionImages;
