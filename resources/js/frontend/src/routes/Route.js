import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import AuthContext from '../contexts/auth';

function RouteWrapper({
    isPrivate = false,
    isAuth = false,
    ...rest
}) {
    const { signed } = useContext(AuthContext);

    if(!signed && isPrivate) {
        return <Redirect to="/login" />
    }

    if(signed && isAuth) {
        return <Redirect to="/" />
    }

    return <Route {...rest} />;
}

export default RouteWrapper;
