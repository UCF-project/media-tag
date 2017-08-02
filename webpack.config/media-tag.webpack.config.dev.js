const path = require('path');
const webpack = require('webpack');

const plugin = [
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
						presets: ['react', 'stage-0'],
						cacheDirectory: true
					}
				}
			]
		},

		plugins: plugin
	};
};
