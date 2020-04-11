const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); //引入这行
// 当以命令行形式执行webpack或webpack-dev-server时，所需要的的入口、出口、插件
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output:{
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer:{
        open: true,
        port:3000,
        contentBase:'src',
        hot:true
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename:'index.html' //设置生成的内存页面名称
        }),
        new VueLoaderPlugin() //new一个实例
    ],
    module:{
        rules:[
            { test:/\.css$/, use:['style-loader','css-loader'] },
            { test:/\.less$/, use:['style-loader','css-loader','less-loader']},
            { test:/\.scss$/, use:['style-loader','css-loader','sass-loader']},
            { test:/\.(jpg|png|gif|bmp|jpeg)$/i, use: 'url-loader?limit=9895&name=[hash:8]-[name].[ext]'},
            // limit给定的值，是图片的大小，单位是byte，小于limit值会被转为base64，大于不会转
            { test:/\.(ttf|eot|svg|woff|woff2)$/, use:'url-loader'},
            // 这是处理字体配置文件的
            { test:/\.vue$/i, use: 'vue-loader'}
        ]
    }
    ,
    resolve:{
        alias:{//修改vue被导入包的路径
            // 'vue$':'vue/dist/vue.js'
        }
    }
}

