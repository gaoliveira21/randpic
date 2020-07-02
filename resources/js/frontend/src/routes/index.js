import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import ImagesList from '../pages/ImagesList';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={SignUp} />
                <Route exact path="/login" component={SignIn} />
                <Route exact path="/imagesList" component={ImagesList} />
            </Switch>
        </BrowserRouter>
    );
}
