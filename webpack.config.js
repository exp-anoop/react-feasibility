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
            Base: "app/components/Base.jsx",
            Nav: "app/components/Nav.jsx",
            Home: "app/components/Home.jsx",
            About: "app/components/About.jsx",
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
    },
    devtool: 'cheap-module-eval-source-map'
};


// plugins: [
//     new webpack.optimize.UglifyJsPlugin({
//         minimize: true,
//         compress: {
//             warnings: true
//         }
//     })
// ]
