import React from 'react';
import {Link, IndexLink} from 'react-router';

var Nav = (props) => {
    return(
        <div>
            <div className="top-bar">
                <div className="top-bar-title">
                    <strong>React</strong>
                </div>
                <div id="responsive-menu">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink></li>
                            <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
                            <li><Link to="/products" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Products</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

module.exports = Nav;
