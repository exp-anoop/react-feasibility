import React from 'react';
import Nav from 'Nav';

var Base = (props) => {
    return(
        <div>
            <Nav/>
            <div className="row">
                <div className="column large-12">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

module.exports = Base;
