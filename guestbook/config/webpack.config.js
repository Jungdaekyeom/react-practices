const path = require('path');

module.exports = (env) => ({
    mode: "none",
    entry: path.resolve(`src/index.js`),
    output: {
        path: path.resolve('public'),
        filename: 'js/main.js',
        assetModuleFilename: 'images/[hash][ext]'
    },
    module: {
        rules: [{
            test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
            type: 'asset/resource'
        }, {
            test: /\.(sa|sc|c)ss$/i,
            use: [
                'style-loader',
                {loader: 'css-loader', options: {modules: true}},
                'sass-loader'
            ]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                configFile: path.resolve('config/babel.config.json')
            }
        }]
    },
    devtool: "eval-source-map",
    devServer: {
        contentBase: path.resolve('public'),
        watchContentBase: true,
        host: "0.0.0.0",
        port: 8888,
        proxy: {
            '/api':'http://localhost:8888' // api로 시작하면 localhost:8888로 보내라
        },
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }
});