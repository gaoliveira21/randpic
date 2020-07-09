import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import BtnFavorite from '../../components/BtnFavorite';
import { FiDownload } from 'react-icons/fi';

import './styles.css';

function CardItem(props) {

    const history = useHistory();

    function handleClickImage({ id, download_url }) {
        history.push('/imageDownload', {
            id,
            url: download_url,
            author: props.imageAuthor
        })
    }
    return (
        <div className="grid-item">
            <div className="card-image hoverzoom" onClick={() => handleClickImage(props.image)}>
                <img src={props.imageDownloadUrl} alt="" className="grid-item-image" />
                <span className="retina"><FiDownload size={20} />Download image</span>
            </div>
            <div className='card-description'>
                <div className="card-text">
                    <h3>{props.imageAuthor}</h3>
                </div>
                <div className="card-favorite">
                    <BtnFavorite data={props.image} />
                </div>
            </div>
        </div>
    );
}
export default CardItem;
