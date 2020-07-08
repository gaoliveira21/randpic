import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import './styles.css';

function BtnFavorite() {
  return (

      <button className="btn-favorite-off">
        Favorite <FaHeart size={16} />
      </button>

      // <button className="btn-favorite-off">
      //   Favorite <FaRegHeart size={16} />
      // </button>
  );
}
export default BtnFavorite;