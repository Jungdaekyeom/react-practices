const path = require('path');

module.exports = (env) => {
    return {
        mode: 'none',
        entry: path.resolve(`frontend/src/index.js`),
        output: {
            path: path.resolve('backend/public'),
            filename: 'assets/js/main.js',
            assetModuleFilename: 'assets/images/[hash][ext]'
        },
        module: {
            rules: [{
                test: /\.js$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve('frontend/config/babel.config.json')
                }
            }, {
                test: /\.(sa|sc|c)ss$/i,
                use:[
                    'style-loader', 
                    {loader: 'css-loader', options: {modules: true} }, // CSS 불러오기
                    'sass-loader'
                ]
            }, {
                test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
                type: 'asset/resource'
            }]
        },
        devtool: "eval-source-map",
        devServer: {
            contentBase: path.resolve('frontend/public'),
            watchContentBase: true,
            host: "0.0.0.0",
            port: 9999,
            proxy: {
                '/api':'http://localhost:8888' // api로 시작하면 localhost:8888로 보내라
            },
            inline: true,
            liveReload: true,
            hot: false,
            compress: true,
            historyApiFallback: true
        }
    };
}