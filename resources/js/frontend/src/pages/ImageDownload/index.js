import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Switch from 'react-switch';
import { FiArrowLeft, FiArrowDown } from 'react-icons/fi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import api from '../../services/api';
import AuthContext from '../../contexts/auth';
import Header from '../../components/Header';
import BtnFavorite from '../../components/BtnFavorite';

import './styles.css';

function imageDownload({ location }) {
    const [url, setUrl] = useState(location.state.url);
    const [grayscale, setGrayscale] = useState(false);
    const [download, setDownload] = useState('');

    const history = useHistory();
    const { signed } = useContext(AuthContext);

    useEffect(() => {
        grayscale ? setUrl(`${url}?grayscale`) : setUrl(location.state.url);
    }, [grayscale])

    useEffect(() => {
        fetch(url).then(response => response.blob().then(blob => {
            const downloadUrl = window.URL.createObjectURL(blob);
            setDownload(downloadUrl);
        }));
    }, [url])

    function backPage() {
        history.goBack();
    }

    async function handleDownload() {
        if (signed) {
            await api.post('/downloads', {
                download_url: url
            });
        }
    }

    return (
        <>
            <Header />
            <div className="title">
                <span href="#" onClick={backPage} className="back-page"><FiArrowLeft />Back</span>
                <h1>{location.state.author}</h1>
            </div>
            <main className="container-imageDownload">
                <section className="content-imageDownload">
                    <img src={url} alt="DOG" />
                </section>

                <section className="content-tools">
                    <h2>Filter</h2>
                    <hr />
                    <div className="filter-imageDownload">
                        <h4>Grayscale</h4>
                        <Switch
                            onChange={() => setGrayscale(!grayscale)}
                            checked={grayscale}
                            height={20}
                            width={50}
                            handleDiameter={25}
                            offColor={'#E7E5E5'}
                            onColor={'#D5B9B2'}
                            offHandleColor={'#555555'}
                            onHandleColor={'#A26769'}
                        />
                    </div>
                    <div className="tool-imageDownload">
                        <h2>Tools</h2>
                        <hr />
                        <div className="favorite">
                            <BtnFavorite />
                        </div>
                        <div className="btn-download">
                            <a href={download} download onClick={handleDownload}>Download<FiArrowDown size={18} /></a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
export default imageDownload;
