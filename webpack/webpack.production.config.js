var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	//devtool: "eval-source-map",//配置生成Source Maps，选择合适的选项
	entry: __dirname + "/app/main.js",//唯一入口文件
	output: {
		path: __dirname + "/public",//打包后文件存放的地方
		filename: "bundle.js"//打包后输出文件的文件名
	},
	module: {//这里添加JSON loader
		loaders: [
			{
				test: /\.json$/,
				loader: "json-loader"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
				
				//配置文件少的时候可以在webpack.config中配置，如果多的话提取出来放在.babelrc里，这样会自动调用
				// query: {
				// 	presets: ['es2015','react']
				// }
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader!postcss-loader"//添加对样表的处理 感叹号的作用在于使同一文件能够使用不同类型的loader
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin("Copyright Jvid"),
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.tmpl.html" //new一个这个插件的实例，并传入相关参数
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: "./public",//本地服务器所加载的页面所在目录
		colors: true,//终端中输出结果为彩色
		historyApiFallback: true,//不跳转
		inline: true,//实时刷新
		hot: true
	}
}