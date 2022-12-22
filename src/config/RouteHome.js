import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../components/pages/Home';
import Catalog from '../components/pages/Catalog';
import Detail from '../components/pages/Detail';

const RouteHome = () => {
    return (
        <BrowserRouter>
            <Route>
                <Route
                    path='/:category/search/:keyword'
                    element={<Catalog />}
                />
                <Route
                    path='/:category/:id'
                    element={<Detail />}
                />
                <Route
                    path='/:category'
                    element={<Catalog />}
                />
                <Route
                    path='/'
                    exact
                    element={<Home />}
                />
            </Route>
        </BrowserRouter>
    );
}

export default RouteHome;