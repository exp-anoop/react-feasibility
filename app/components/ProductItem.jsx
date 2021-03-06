import React from 'react';

import ProductView from 'ProductView';
import QuantityForm from 'QuantityForm';

var ProductItem = React.createClass({
    getDefaultProps: function() {
        return {
            name: "No Title",
            price: 0
        }
    },
    getInitialState : function() {
        return {
            total: 0
        }
    },
    handleOnQuantityUpdate: function(quantity) {
        this.setState({
            total : quantity * this.props.price
        });
    },
    render: function() {
        return (
            <div>
                <ProductView name={this.props.name} price={this.props.price} total={this.state.total}/>
                <QuantityForm onQuantityUpdate={this.handleOnQuantityUpdate} />
                <hr></hr>
            </div>
        );
    }
});

module.exports = ProductItem;
