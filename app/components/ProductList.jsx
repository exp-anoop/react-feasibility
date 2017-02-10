import React from 'react';
import ProductItem from 'ProductItem';

var ProductList = (props) => {
    return (
        <div>
            <h2>Products List</h2>
            <ProductItem name="Apple" price={200}/>
            <ProductItem name="Samsung" price={140}/>
        </div>
    );
}

module.exports = ProductList;
