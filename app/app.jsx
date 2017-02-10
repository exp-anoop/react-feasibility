import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from "react-router";

import Base from 'Base';
import ProductList from 'ProductList';
import About from 'About';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Base}>
            <Route path="products" component={ProductList} />
            <Route path="about" component={About} />
            <IndexRoute component={ProductList} />
        </Route>
    </Router>,
    document.getElementById('root')
);
