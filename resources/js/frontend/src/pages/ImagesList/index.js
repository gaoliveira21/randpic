import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import { FiImage, FiDownload } from 'react-icons/fi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import randomNumber from '../../utils/randomNumber';

import api from '../../services/api';

import Header from '../../components/Header';
import './styles.css';

function ImagesList() {

    const [btnFavorite, setBtnFavorite] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function loadImages() {
            const imagesResponse = [];
            for (let index = 1; index <= 6; index++) {
                try {
                    const response = await api.get(`https://picsum.photos/id/${randomNumber(1, 1000)}/info`);
                    imagesResponse.push(response.data);
                } catch (error) {
                    console.log(error);
                }
            }
            setImages(imagesResponse);
        }
        loadImages();
    }, [])

    // function handleClickImage() {
    //     console.log(document.querySelectorAll('img'));
    // }

    return (
        <>
            <Header></Header>
            <main className="container-imagesList">
                <h1>We chose these images for you</h1>
                <section className="content-imagesList">
                    <div className="grid-imagesList">
                        {images.map(image => (
                            <div key={image.id} className="grid-item">
                                <div className="card-image hoverzoom">
                                    <img src={image.download_url} alt="" className="grid-item-image" />
                                    <Link to="#" className="retina"><FiDownload size={20} />Baixar imagem</Link>
                                </div>
                                <div className='card-description'>
                                    <div className="card-text">
                                        <h3>Imagem</h3>
                                    </div>
                                    <div className="card-favorite">
                                        {btnFavorite ?
                                            (
                                                <button className="btn-on" onClick={() => setBtnFavorite(false)}>
                                                    <FaHeart size={16} />
                                                </button>

                                            ) :
                                            (
                                                <button className="btn-off" onClick={() => setBtnFavorite(true)}>
                                                    <FaRegHeart size={16} />
                                                </button>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* <section className="filters">
                    <button><FiImage></FiImage><Link to="/imagesList">Generate ramdom image</Link></button>
                </section> */}
            </main>
        </>
    );
}
export default ImagesList;
