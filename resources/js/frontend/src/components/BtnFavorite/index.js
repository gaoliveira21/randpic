import React, { useState, useContext } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import api from '../../services/api';

import './styles.css';

import AuthContext from '../../contexts/auth';

function BtnFavorite({ data }) {
    const [active, setActive] = useState(false);

    const { signed, token } = useContext(AuthContext);

    async function handleClick() {
        const response = await api.get('/collections', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const { id } = response.data.filter(res => res.name === "favorites")[0];

        if (!active) {
            await api.post(`collections/${id}/images`,
                { image_id: data.id, download_url: data.download_url, author: data.author },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
        } else {
            await api.delete(`/collections/${id}/images/${data.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
        }

        setActive(!active);
    }

    return (

        <>
            {
                signed ? (
                    <button onClick={handleClick} className={active ? "btn-favorite-on" : "btn-favorite-off"}>
                        Favorite <FaHeart size={16} />
                    </button>
                ) : <></>
            }
        </>

        // <button className="btn-favorite-off">
        //   Favorite <FaRegHeart size={16} />
        // </button>
    );
}
export default BtnFavorite;
