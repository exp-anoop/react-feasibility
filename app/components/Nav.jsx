import React from 'react';
import {Link, IndexLink} from 'react-router';

var Nav = React.createClass({
    render: function() {
        return(
            <div>
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                <Link to="/about" activeClassName="active">About</Link>
                <Link to="/products" activeClassName="active">Products</Link>
            </div>
        );
    }
});

module.exports = Nav;