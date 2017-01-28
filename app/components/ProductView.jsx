var React = require('react');

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
                <h2>Name: {this.props.name}</h2>
                <h4>Price: ${this.props.price}</h4>
                <h3>Total: ${this.props.total}</h3>
            </div>
        );
    }
});

module.exports = ProductView;
