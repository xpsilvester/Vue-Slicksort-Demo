const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './Script/main.js', //项目入口文件
    output:{                    //输出编译后文件地址及文件名
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'vue drag',
            inject:'body',
            filename:'index.html',
            template:path.resolve(__dirname, "index.html")
        }),
        new VueLoaderPlugin()
    ],
    resolve: { alias: { 'vue': 'vue/dist/vue.js' } },
    devServer: {
        historyApiFallback: true,
    },
    module:{
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, loader: 'vue-loader' },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader",

            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    optimization: {
        runtimeChunk: {
          name: 'manifest'
        },
        // minimizer: true, // [new UglifyJsPlugin({...})]
        splitChunks:{
          chunks: 'async',
          minSize: 30000,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          name: false,
          cacheGroups: {
            vendor: {
              name: 'vendor',
              chunks: 'initial',
              priority: -10,
              reuseExistingChunk: false,
              test: /node_modules\/(.*)\.js/
            },
            styles: {
              name: 'styles',
              test: /\.(scss|css)$/,
              chunks: 'all',
              minChunks: 1,
              reuseExistingChunk: true,
              enforce: true
            }
          }
        }
    }
};