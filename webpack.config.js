var webpack = require('webpack');

module.exports = {
    entry: "./app/app.jsx",
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        root: __dirname,
        alias: {
            ProductList: "app/components/ProductList.jsx",
            ProductItem: "app/components/ProductItem.jsx",
            ProductView: "app/components/ProductView.jsx",
            QuantityForm: "app/components/QuantityForm.jsx"
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            },
            test: /.jsx?$/
        }]
    }
};


// plugins: [
//     new webpack.optimize.UglifyJsPlugin({
//         minimize: true,
//         compress: {
//             warnings: true
//         }
//     })
// ]