var path = require('path');

module.exports = {
	entry: './lib/media-tag.ts',
	output: {
		filename: 'media-tag.js',
		path: path.join(__dirname, 'dist'),
		library: 'MediaTag'
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: 'source-map',

	resolve: {
		// Add '.ts' as resolvable extensions.
		extensions: ['.ts', '.js']
	},

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{test: /\.tsx?$/, loader: 'awesome-typescript-loader'},
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{test: /\.js$/, enforce: 'pre', loader: 'source-map-loader'}
		]
	},

	devServer: {
		contentBase: path.join(__dirname, 'demo'),
		compress: true,
		port: 9000
	}
};
