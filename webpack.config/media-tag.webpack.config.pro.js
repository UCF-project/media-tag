const path = require('path');
const webpack = require('webpack');

// Seems no work using webpack configuration, parameters ...
process.env.NODE_ENV = 'production';

const pluginList = [
	new webpack.LoaderOptionsPlugin({
		minimize: true,
		debug: false
	}),

	new webpack.optimize.UglifyJsPlugin({
		sourceMap: false,
		beautify: false,
		mangle: true,
		compress: true,
		comments: false
	})
];

module.exports = function () {
	return {
		entry: {
			'media-tag-nacl': './src/presets/media-tag-nacl.js',
			'media-tag': './src/presets/media-tag.js',
			'media-tag-react': './src/presets/media-tag.react.js',
			'media-tag-core': './src/core/media-tag-api.js',
			app: './src/react/app.js'
		},

		output: {
			filename: '[name].min.js',
			path: path.join(__dirname, '../dist'),
			library: 'MediaTag',
			libraryTarget: 'umd'
		},

		module: {
			rules: [
				{
					test: /\.css?$/,
					use: [
						'style-loader',
						'css-loader'
					]
				},
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules|assets)/,
					loader: 'babel-loader',
					query: {
						presets: ['env'],
						cacheDirectory: true
					}
				}
			]
		},

		plugins: pluginList
	};
};
