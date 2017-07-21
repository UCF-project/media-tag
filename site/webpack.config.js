const path = require('path');
const webpack = require('webpack');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
	// Entry points to the project
	entry: {
		main: [
			'webpack/hot/only-dev-server', // Only- means to only hot reload for successful updates
			'./src/app/app.js'
		]
	},
	// Server Configuration options
	devServer: {
		contentBase: 'src/www', // Relative directory for base of server
		hot: true, // Live-reload
		inline: true,
		port: 3000, // Port Number
		host: 'localhost' // Change to '0.0.0.0' for external facing server
	},
	devtool: 'eval',
	output: {
		path: path.resolve(__dirname, 'build'), // Path of output file
		filename: 'app.js'
	},
	plugins: [
		// Enables Hot Modules Replacement
		new webpack.HotModuleReplacementPlugin(),
		// Moves files
		new TransferWebpackPlugin([
			{from: 'www'}
		], path.resolve(__dirname, 'src'))
	],
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
					cacheDirectory: true
				}
			}
		]
	}
};

module.exports = config;
