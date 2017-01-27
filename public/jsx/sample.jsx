var Product = React.createClass({

    getDefaultProps: function() {
        return {
            name: "No Title",
            price: 0
        };
    },

    getInitialState: function() {
        return {
            quantity: 0,
            total:0
        }
    },

    addQuantity: function(e) {
        e.preventDefault();
        var quantityRef = this.refs.quantity;
        var quantity = parseInt(quantityRef.value);
        if(quantity > 0) {
            this.setState({
                quantity: quantityRef.value,
                total: quantity * this.props.price
            });
        }
        quantityRef.value = 0;
    },

    render: function() {
        return (
            <div>
                <h2>Name: {this.props.name}</h2>
                <h3>Price: ${this.props.price}</h3>
                <h3>Total: {this.state.quantity} x ${this.props.price} = ${this.state.total}</h3>
                <form onSubmit={this.addQuantity}>
                    <input type="number" ref='quantity' />
                    <button type="submit">Add Quantity</button>
                </form>
                <hr></hr>
            </div>
        );
    }
});

ReactDOM.render(
    <Product name="Apple" price={200}/>,
    document.getElementById('root')
);
