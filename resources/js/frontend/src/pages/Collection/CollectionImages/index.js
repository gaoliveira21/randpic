import React, { useEffect, useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiDownload, FiArrowLeft, FiX } from 'react-icons/fi';

import api from '../../../services/api';

import AuthContext from '../../../contexts/auth';
import Header from '../../../components/Header';
import './styles.css';

function CollectionImages({ location }) {
    console.log(location);
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

    function handleNavigate({ image_id, download_url, author }) {
        history.push('/imageDownload', {
            id: image_id,
            url: download_url,
            author
        })
    }

    async function handleRemoveImage({ image_id }) {
        if (window.confirm('Do you want to remove this image?')) {
            const { collection_id } = location.state;
            await api.delete(`/collections/${collection_id}/images/${image_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const imgs = images.filter(image => image.image_id !== image_id);
            setImages(imgs);
        }

    }

    return (
        <>
            <Header></Header>
            <main className="container-collection-images">
                <span onClick={backPage} className="back-page"><FiArrowLeft />Back</span>
                <div className="title-collection-images">
                    <h1>{location.state.name}</h1>
                </div>
                <section>
                    <div className="grid-collection-images">
                        {images.map(image => (
                            <div key={image.id} className="item-collection-images">
                                <div className="card-image hoverzoom">
                                    <img src={`https://picsum.photos/id/${image.image_id}/800/800`} alt="" className="collection-item-image" />
                                    <span onClick={() => handleNavigate(image)} className="retina"><FiDownload size={20} />Download image</span>
                                </div>
                                <div className='card-description-collection-images'>
                                    <div className="card-text-collection-images">
                                        <h3>{image.author}</h3>
                                    </div>
                                    <div className="card-delete-collection-images">
                                        <FiX onClick={() => handleRemoveImage(image)} size={24}/>
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
