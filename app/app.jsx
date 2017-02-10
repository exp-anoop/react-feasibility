import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from "react-router";

import Base from 'Base';
import Home from 'Home';
import About from 'About';
import ProductList from 'ProductList';


import 'style!css!foundation-sites/dist/css/foundation.css';
$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Base}>
            <Route path="products" component={ProductList} />
            <Route path="about" component={About} />
            <IndexRoute component={Home} />
        </Route>
    </Router>,
    document.getElementById('root')
);
