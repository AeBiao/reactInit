import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import routes from './router';
import './index.scss';

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div />}>
                <Router>
                    <div>
                        {routes.map((route) => (
                            <Route key={route.path} path={route.path} component={route.component} />
                        ))}
                    </div>
                </Router>
            </Suspense>
        </div>
    );
}

export default App;
