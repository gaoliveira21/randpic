import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import { FiImage, FiDownload } from 'react-icons/fi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import api from '../../services/api';

import Header from '../../components/Header';
import './styles.css';

function ImagesList() {

    const [btnFavorite, setBtnFavorite] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function loadImages() {
            const imagesResponse = [];
            for (let index = 1; index <= 100; index+=10) {
                const response = await api.get(`https://picsum.photos/id/${index}/info`);
                imagesResponse.push(response.data);
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
            <h2 className="title-imagesList">We chose these images for you</h2>
            <main className="container-imagesList">

                <section className="content-imagesList">
                    <div className="grid-imagesList">
                        {images.map(image => (
                            <div key={image.id} className="grid-item">
                                <div className="card-image hoverzoom">
                                    <img src={`https://picsum.photos/id/${image.id}/200/300`} alt="" className="grid-item-image" />
                                    <Link to="#" className="retina"><FiDownload size={20} />Baixar imagem</Link>
                                </div>
                                <div className='card-description'>
                                    <div className="card-text">
                                        <h3>{image.author}</h3>
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

                <section className="filters">
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
