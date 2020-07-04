import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <header>
    <nav className="menu">
      <h1>RandPic</h1>
      <ul>
        <li><Link to="/imagesList">Generate</Link></li>
        <li><Link to="/register">Sign Up</Link></li>
        <li><button className="btn-signIn"><Link to="/login">Sign In</Link></button></li>
      </ul>
    </nav>
  </header>
  );
}
export default Header;