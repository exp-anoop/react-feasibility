var webpack = require('webpack');

module.exports = {
    entry: "./app/app.jsx",
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
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
