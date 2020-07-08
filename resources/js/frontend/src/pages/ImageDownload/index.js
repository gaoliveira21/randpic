import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Switch from 'react-switch';
import { FiArrowLeft, FiArrowDown } from 'react-icons/fi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import FileDownload from 'js-file-download';

import api from '../../services/api';
import Header from '../../components/Header';

import './styles.css';

function imageDownload({ location }) {

    const [url, setUrl] = useState(location.state.url);
    const [grayscale, setGrayscale] = useState(false);
    const [btnVisible, setBtnVisible] = useState(false);
    const [btnFavorite, setBtnFavorite] = useState(false);
    const [download, setDownload] = useState('');

    const history = useHistory();

    useEffect(() => {
        grayscale ? setUrl(`${url}?grayscale`) : setUrl(location.state.url);
    }, [grayscale])

    useEffect(() => {
        fetch(url).then(response => response.blob().then(blob => {
            console.log(response);
            const downloadUrl = window.URL.createObjectURL(blob);
            setDownload(downloadUrl);
        }));
    }, [url])

    function backPage() {
        history.goBack();
    }

    async function handleDownload() {
        console.log(download, url);
    }

    return (
        <>
            <Header />
            <div className="title">
                <span href="#" onClick={backPage} className="back-page"><FiArrowLeft />Voltar</span>
                <h1>Nome da Imagem</h1>
                <h3>Nome completo do autor</h3>
            </div>
            <main className="container-imageDownload">
                <section className="content-imageDownload">
                    <img src={url} alt="DOG" />
                </section>

                <section className="content-tools">
                    <h2>Filters</h2>
                    <div className="grayscale-filter">
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
                    <div className="favorite">
                        {btnFavorite ?
                            (
                                <button className="btn-favorite-on" onClick={() => setBtnFavorite(false)}>
                                    Favorite <FaHeart size={16} />
                                </button>

                            ) :
                            (
                                <button className="btn-favorite-off" onClick={() => setBtnFavorite(true)}>
                                    Favorite <FaRegHeart size={16} />
                                </button>
                            )
                        }
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn" onClick={() => setBtnVisible(!btnVisible)}>Download<FiArrowDown size={18} /></button>
                        <div id="myDropdown" className={btnVisible ? "dropdown-content show" : "dropdown-content"}>
                            <div>
                                <input type="radio" name="img-download" value="original" id="original" />
                                <label htmlFor="original"><strong>Original </strong>(5184 x 3888)</label>
                            </div>
                            <hr />
                            <div>
                                <input type="radio" name="img-download" value="1" id="big" />
                                <label htmlFor="big"><strong>Grande </strong>(1920 x 1440)</label>
                            </div>
                            <hr />
                            <div>
                                <input type="radio" name="img-download" value="medium" id="medium" />
                                <label htmlFor="medium"><strong>Medium </strong>(1280 x 960)</label>
                            </div>
                            <hr />
                            <div>
                                <input type="radio" name="img-download" value="little" id="little" />
                                <label htmlFor="little"><strong>Little </strong>(1280 x 960)</label>
                            </div>
                            <hr />
                            <div className="btn-download" onClick={handleDownload}>
                                <a href={download} download>Download Free</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
export default imageDownload;
