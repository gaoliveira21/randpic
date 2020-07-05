import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import AuthContext from '../../contexts/auth';

function Header() {

    const { signed, signOut } = useContext(AuthContext);
    const history = useHistory();

    function handleLogout() {
        signOut();
        history.push('/login');
    }

    return (
        <header>
            <nav className="menu">
                <h1>RandPic</h1>
                <ul>
                    <li><Link to="/imagesList">Generate</Link></li>
                    {signed ? (
                        <>
                            <li><Link to="/imagesList">Collections</Link></li>
                            <li><Link to="/imagesList">Downloads</Link></li>
                            <li><Link to="/imagesList">Profile</Link></li>
                            <li>
                                <button onClick={handleLogout}>
                                    <a href="#">Logout<FiLogOut /></a>
                                </button>
                            </li>

                        </>
                    ) : (
                            <>
                                <li><Link to="/register">Sign Up</Link></li>
                                <li>
                                    <button>
                                        <Link to="/login">Sign In</Link>
                                    </button>
                                </li>
                            </>
                        )}
                </ul>
            </nav >
        </header >
    );
}
export default Header;
