const path = require('path');
const webpack = require('webpack');

const plugin = [
	new webpack.LoaderOptionsPlugin({
		minimize: true,
		debug: false
	}),

	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('production-umd')
	}),

	new webpack.optimize.UglifyJsPlugin({
		sourceMap: false,
		beautify: false,
		mangle: true,	
		compress: true,
		comments: false // /[a-zA-Z]+[ ]*[0-9]*[ ]*/
	})
];

module.exports = function () {
	return {
		entry: {
			'media-tag': [
				'./src/presets/static/media-tag.js'
			],
			test: [
				'./test/media-tag.js'
			]
		},

		output: {
			filename: '[name].js',
			path: path.join(__dirname, '../dist'),
			library: 'MediaTag',
			libraryTarget: 'umd'
		},

		module: {
			loaders: [
				{
					test: /\.js$/,
					exclude: '/node_modules/',
					loader: 'babel-loader',
					query: {
						presets: ['env']
					}
				}
			]
		},

		devServer: {
			contentBase: path.join(__dirname, '../demo'),
			compress: true
		},

		plugins: plugin
	};
};
