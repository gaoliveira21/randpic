import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/auth';

function Header() {

    const { signed } = useContext(AuthContext);

    return (
        <header>
            <nav className="menu">
                <h1>RandPic</h1>
                <ul>
                    <li><Link to="/imagesList">Generate</Link></li>
                    {signed ? (
                        <p>Logado</p>
                    ) : (
                        <>
                            <li><Link to="/register">Sign Up</Link></li>
                            <li><button className="btn-signIn"><Link to="/login">Sign In</Link></button></li>
                        </>
                    )}
                </ul>
            </nav >
        </header >
    );
}
export default Header;
