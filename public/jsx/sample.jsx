var Product = React.createClass({

    getDefaultProps: function() {
        return {
            name: "No Title",
            price: 0
        };
    },

    addItem: function() {
        console.log('Name', this.props.name);
        console.log('Price', this.props.price);
    },

    render: function() {
        return (
            <div>
                <h2>Name: {this.props.name}</h2>
                <h3>Price: ${this.props.price}</h3>
                <button onClick={this.addItem}>Add</button>
                <hr></hr>
            </div>
        );
    }
});

ReactDOM.render(
    <Product name="Apple" price={200}/>,
    document.getElementById('root')
);
