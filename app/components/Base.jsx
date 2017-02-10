import React from 'react';
import Nav from 'Nav';

var Base = React.createClass({
    render: function() {
        return(
            <div>
                <Nav/>
                <h1>My Application</h1>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Base;
