import React from 'react';

var ProductView = React.createClass({
    getDefaultProps: function() {
        return {
            name: "No Title",
            price: 0,
            total: 0
        }
    },
    render: function() {
        return (
            <div>
                <h3>Name: {this.props.name}</h3>
                <h4>Price: ${this.props.price}</h4>
                <h4>Total: ${this.props.total}</h4>
            </div>
        );
    }
});

module.exports = ProductView;
