var path = require('path');

	module.exports = {
		//目录上下文信息 设置姐嘻嘻处理文件入口的相对目录，值为一个绝对目录路径，默认为当前执行目录
		content: path.resolve(__dirname,'src/'),
		//处理文件入口信息 值可以是字符串，或数组，或对象，值为字符串或数组时，即输出单文件，值为对象，可以输出多文件，输出文件名称等信息参考文件输出信息
		entry: {
			app: './scripts/app.js'
		},
		//文件输出信息
		output: {
			//名称信息
			filename: '[name].js',
			//定义输出文件所在目录  output.publicPath：定义输出文件在浏览器访问时的基础相对路径，可以与后文webpack-dev-server一起使用。
			path: path.resolve(__dirname,'dist/scripts/')

		},
		//webpack加载器与模块  加载器是作用域应用资源文件的转换器，它是一系列函数，接受资源文件的内容做参数，然后返回新的资源（以一个模块的形式返回）
		//webpack解析文件时使用的加载器都声明在module属性的loaders数组中，可以设置一个或多个加载器。
		/*
		module.noParse：指定某些文件不需要使用解析，支持传入文件路径或正则表达式；
		module.loaders：指定解析文件的加载器模块及各模块解析规则，可以设置以下属性：
		test: 待解析文件需匹配的规则，通常以文件后缀名称匹配文件；
		include：待解析文件所处目录；
		exclude: 过滤掉的目录；
		loader：加载器模块名称；
		loaders多个加载器；
		*/
		module: {
			loaders: []
		},
		//模块解析规则配置
		//webpack支持在resolve属性对象中配置模块解析规则，主要有root，modules, alias和extensions属性。
		resolve: {
			modules: [],
			alias: {},
			extensions: []
		},
		plugins: [],
		devServer: {}
	}