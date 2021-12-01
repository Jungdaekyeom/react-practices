const path = require('path');

module.exports ={
    mode: 'development',
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[hash][ext]'
    },
    module: {
        rules: [{
            test: /\.js$/i,
            exclude: /node-modules/, // 오늘 추가한 부분
            use:['babel-loader']
        }, {
            test: /\.(sa|sc|c)ss$/i,
            use:['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
            type: 'asset/resource'
        }]
    },    
    target: ['web', 'es6'], /* 웹 설정 추가. 바벨만 깔아서는 안됨*/
    devtool: "eval-source-map",
    devServer: {
        host: '0.0.0.0',
        port: 9999,
        // inline: true
        hot: false,
        compress: true,
        historyApiFallback: true
    }
}