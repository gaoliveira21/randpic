import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiDownload, FiImage } from 'react-icons/fi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import api from '../../services/api';

import AuthContext from '../../contexts/auth';
import Header from '../../components/Header';
import './styles.css';

function Collection() {
    const { token } = useContext(AuthContext);

    const [collections, setCollections] = useState([]);

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

    return (
        <>
            <Header></Header>
            <main className="container-collection">
                <h1>Collections</h1>
                <section className="grid-collection">
                    {collections.map(collection => (
                        <Link key={collection.id} to="/collectionImages">
                            <div className="card-collection">
                                <div className="card-image-collection">
                                    <FiImage size={36} />
                                </div>
                                <div className="card-description-collection">
                                    <h3>{collection.name}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </section>
            </main>
        </>
    );
}
export default Collection;
