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
})

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

ReactDOM.render(
    <ProductList />,
    document.getElementById('root')
);
