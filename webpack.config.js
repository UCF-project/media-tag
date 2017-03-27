const path = require('path');
const webpack = require('webpack');

const plugin = (() => {
	if (process.env.NODE_ENV !== 'production') {
		console.log(process.env.NODE_ENV);
	}

	if (process.env.BABEL_ENV !== 'production') {
		console.log(process.env.BABEL_ENV);
	}

	switch (process.env.NODE_ENV) {
		case 'production':
			return [
				new webpack.LoaderOptionsPlugin({
					minimize: false,
					debug: false
				}),

				new webpack.DefinePlugin({
					'process.env.NODE_ENV': JSON.stringify('production')
				})

				// new webpack.optimize.UglifyJsPlugin({
				// 	sourceMap: false,
				// 	beautify: false,
				// 	mangle: {
				// 		screw_ie8: true, 	// eslint-disable-line camelcase
				// 		keep_fnames: false 	// eslint-disable-line camelcase
				// 	},
				// 	compress: {
				// 		screw_ie8: true 	// eslint-disable-line camelcase
				// 	},
				// 	comments: false
				// })
			];
		default:
			return [];
	}
})();

module.exports = {
	/**
	 * Polyfill  required for IE11
	 */
	entry: {
		'media-tag': [
			'babel-polyfill',
			'./src/media-tag.js'
		],
		'media-tag-crypto': [
			'babel-polyfill',
			'./src/media-tag-crypto.js'
		],
		test: [
			'babel-polyfill',
			'./test/media-tag.js'
		]
	},

	/**
	 * Output library bundle at ./dist
	 */
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'dist'),
		library: 'mediaTag',
		libraryTarget: 'umd'
	},

	// devtool: 'source-map',

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	},

	plugins: plugin
};
