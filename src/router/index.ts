import React from 'react';

const Home = React.lazy(() => import('../page/login'));
const Mine = React.lazy(() => import('../page/Home'));

const routes = [
    {
        path: '/login',
        component: Home,
        
    }, {
        path: "/",
       component: Mine 
    }
];

export default routes;
