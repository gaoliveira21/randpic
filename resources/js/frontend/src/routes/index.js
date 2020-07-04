import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import ImagesList from '../pages/ImagesList';
import ImageDownload from '../pages/ImageDownload';
import User from '../pages/User';
import Collection from '../pages/Collection';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={SignUp} />
                <Route exact path="/login" component={SignIn} />
                <Route exact path="/imagesList" component={ImagesList} />
                <Route exact path="/imageDownload" component={ImageDownload} />
                <Route exact path="/user" component={User} />
                <Route exact path="/collection" component={Collection} />
            </Switch>
        </BrowserRouter>
    );
}
