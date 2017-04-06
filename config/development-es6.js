const path = require('path');
const webpack = require('webpack');

const plugin = [
	new webpack.LoaderOptionsPlugin({
		minimize: true,
		debug: false
	}),

	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('development-es6')
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

		devServer: {
			contentBase: path.join(__dirname, '../demo'),
			compress: true
		},

		plugins: plugin
	};
};
