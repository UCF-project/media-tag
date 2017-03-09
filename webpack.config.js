const path = require('path');
// const ClosureCompiler = require('google-closure-compiler-js').webpack;

module.exports = {
	// Media Tag entry point
	entry: './src/media-tag.js',

	// Output library bundle at ./dist
	output: {
		filename: 'media-tag.js',
		path: path.join(__dirname, 'dist'),
		library: 'mediaTag'
	},

	// Enable sourcemaps for debugging webpack output.
	devtool: 'source-map',

	// Enable development server
	devServer: {
		contentBase: path.join(__dirname, 'demo'),
		compress: true
	} // ,
	// plugins: [
	// 	new ClosureCompiler({
	// 		options: {
	// 			languageIn: 'ECMASCRIPT6',
	// 			languageOut: 'ECMASCRIPT5',
	// 			compilationLevel: 'ADVANCED',
	// 			warningLevel: 'VERBOSE'
	// 		}
	// 	})
	// ]
};
