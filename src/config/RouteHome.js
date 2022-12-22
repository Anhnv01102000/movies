import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from '../components/pages/Home';
import Catalog from '../components/pages/Catalog';
import Detail from '../components/pages/Detail';

const RouteHome = () => {
    return (
        <Routes>
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
                component={<Home />}
            />
        </Routes>
    );
}

export default RouteHome;