const path = require('path');
// const ClosureCompiler = require('google-closure-compiler-js').webpack;

module.exports = {
	// Media Tag entry point
	entry: [
		'babel-polyfill', // Needed for IE11
		'./src/media-tag.js'
	],

	// Output library bundle at ./dist
	output: {
		filename: 'media-tag.js',
		path: path.join(__dirname, 'dist'),
		library: 'mediaTag'
	},

	// Enable sourcemaps for debugging webpack output.
	devtool: 'source-map',

	// Needed for IE11
	module: {
		rules: [
			// TODO: add transform-runtime plugin
			// the 'transform-runtime' plugin tells babel to require the runtime
			// instead of inlining it.
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['env']
					// plugins: ['transform-runtime']
				}
			}
		]
	},

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
