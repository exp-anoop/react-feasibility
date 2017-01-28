var React = require('react');

var QuantityForm = React.createClass({
    returnQuantity: function(e) {
        e.preventDefault();
        var quantityRef = this.refs.quantity;
        var quantity = parseInt(quantityRef.value) || 0;
        // quantityRef.value = 0;
        this.props.onQuantityUpdate(quantity);
    },

    render: function() {
        return (
            <div>
                <form onSubmit={this.returnQuantity}>
                    <input type="number" ref='quantity' />
                    <button type="submit">Add Quantity</button>
                </form>
            </div>
        );
    }
});

module.exports = QuantityForm;
