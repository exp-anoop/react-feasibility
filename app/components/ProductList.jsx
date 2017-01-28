var React = require('react');

var ProductItem = require('./ProductItem.jsx');

var ProductList = React.createClass({
    render: function() {
        return (
            <div>
                <ProductItem name="Apple" price={200}/>
                <ProductItem name="Samsung" price={140}/>
            </div>
        );
    }
});

module.exports = ProductList;
