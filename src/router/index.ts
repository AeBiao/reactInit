import React from 'react';

const Home = React.lazy(() => import('../page/login'));

const routes = [
    {
        path: '/login',
        component: Home
    }
];

export default routes;
