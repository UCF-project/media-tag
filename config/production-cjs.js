const path = require('path');
const webpack = require('webpack');

const plugin = [
	new webpack.LoaderOptionsPlugin({
		minimize: true,
		debug: false
	}),

	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('production')
	}),

	/**
	 * UglifyJsPlugin works with ES5, but some features ES6 aren't supported.
	 */
	new webpack.optimize.UglifyJsPlugin({
		sourceMap: true,
		beautify: false,
		mangle: {
			screw_ie8: true, 	// eslint-disable-line camelcase
			keep_fnames: false 	// eslint-disable-line camelcase
		},
		compress: {
			screw_ie8: true 	// eslint-disable-line camelcase
		},
		comments: false
	})
];

module.exports = function () {
	return {
		entry: {
			'media-tag': [
				'./src/media-tag.js'
			],
			'media-tag-crypto': [
				'./src/media-tag-crypto.js'
			],
			test: [
				'./test/media-tag.js'
			]
		},

		output: {
			filename: '[name].js',
			path: path.join(__dirname, '../dist'),
			library: 'mediaTag'
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

		devtool: 'source-map',

		devServer: {
			contentBase: path.join(__dirname, '../demo'),
			compress: true
		},

		plugins: plugin
	};
};
