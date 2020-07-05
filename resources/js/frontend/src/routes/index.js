import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import ImagesList from '../pages/ImagesList';
import ImageDownload from '../pages/ImageDownload';
import User from '../pages/User';
import Collection from '../pages/Collection';
import Downloads from '../pages/Downloads';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={SignUp} isAuth />
                <Route exact path="/login" component={SignIn} isAuth />
                <Route exact path="/imagesList" component={ImagesList} />
                <Route exact path="/imageDownload" component={ImageDownload} />
                <Route exact path="/user" component={User} isPrivate />
                <Route exact path="/collection" component={Collection} isPrivate />
                <Route exact path="/downloads" component={Downloads} isPrivate />
            </Switch>
        </BrowserRouter>
    );
}
