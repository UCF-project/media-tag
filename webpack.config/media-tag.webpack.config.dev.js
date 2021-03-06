const path = require('path');
const webpack = require('webpack');

// Seems no work using webpack configuration, parameters ...
process.env.NODE_ENV = 'development';

const pluginList = [
	new webpack.LoaderOptionsPlugin({
		minimize: false,
		debug: false,
		options: {
			context: __dirname
		}
	}),

	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('development')
	})
];

module.exports = function () {
	return {
		entry: {
			'media-tag-nacl': './src/presets/media-tag-nacl.js',
			'media-tag': './src/presets/media-tag.js',
			'media-tag-react': './src/presets/media-tag.react.js',
			'media-tag-core': './src/core/media-tag-api.js',
			test: './test/media-tag.js',
			app: './src/react/app.js'
		},

		output: {
			filename: '[name].js',
			path: path.join(__dirname, '../dist'),
			library: 'MediaTag',
			libraryTarget: 'umd'
		},

		devServer: {
			contentBase: path.join(__dirname, '../demo'),
			compress: true
		},

		module: {
			rules: [
				{
					test: /\.css?$/,
					exclude: /(node_modules|assets)/,
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
