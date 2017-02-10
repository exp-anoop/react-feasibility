import React from 'react';
import Nav from 'Nav';

var Base = (props) => {
    return(
        <div>
            <Nav/>
            <h1>My Application</h1>
            {props.children}
        </div>
    );
}

module.exports = Base;
