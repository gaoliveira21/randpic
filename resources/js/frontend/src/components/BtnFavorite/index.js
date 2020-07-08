import React, { useState, useContext } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import './styles.css';

import AuthContext from '../../contexts/auth';

function BtnFavorite() {

  const { signed } = useContext(AuthContext);

  return (

    <>
    {
      signed ? (
        <button className="btn-favorite-off">
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