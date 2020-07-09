import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Switch from 'react-switch';
import { FiImage, FiDownload } from 'react-icons/fi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import randomNumber from '../../utils/randomNumber';

import api from '../../services/api';

import Loading from '../../components/Loading';
import Header from '../../components/Header';
import CardItem from '../../components/CardItem';
import './styles.css';

function ImagesList() {

    const [btnFavorite, setBtnFavorite] = useState(false);
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function loadImages() {
            setLoading(true);
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
            setLoading(false);
        }
        loadImages();
    }, [])

    // function handleClickImage({ id, download_url }) {
    //     history.push('/imageDownload', {
    //         id,
    //         url: download_url
    //     })
    // }

    return (
        <>
            <Header></Header>
            {loading ? (
                <div className="load">
                    <Loading />
                </div>
            ) : (
                    <main className="container-imagesList">
                        <h1>We chose these images for you</h1>
                        <section>
                            <div className="grid-imagesList">
                                {images.map(image => (
                                    <CardItem
                                        key={image.id}
                                        image={image}
                                        imageDownloadUrl={image.download_url}
                                        imageAuthor={image.author}
                                    />
                                ))}
                            </div>
                        </section>
                    </main>
                )}
        </>
    );
}
export default ImagesList;
