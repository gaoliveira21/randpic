import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiDownload, FiImage } from 'react-icons/fi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import api from '../../services/api';

import AuthContext from '../../contexts/auth';
import Header from '../../components/Header';
import './styles.css';

function Collection() {
    const { token } = useContext(AuthContext);

    const [collections, setCollections] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function loadCollections() {
            const response = await api.get('/collections', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCollections(response.data);
        }
        loadCollections();
    }, []);

    function handleNavigate(id) {
        history.push('/collectionImages', {
            collection_id: id,
        });
    }

    return (
        <>
            <Header></Header>
            <main className="container-collection">
                <h1>Collections</h1>
                <section className="grid-collection">
                    {collections.map(collection => (
                        <span key={collection.id} onClick={() => handleNavigate(collection.id)} >
                            <div className="card-collection">
                                <div className="card-image-collection">
                                    <FiImage size={36} />
                                </div>
                                <div className="card-description-collection">
                                    <h3>{collection.name}</h3>
                                </div>
                            </div>
                        </span>
                    ))}
                </section>
            </main>
        </>
    );
}
export default Collection;
