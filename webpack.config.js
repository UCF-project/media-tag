const path = require('path');
const webpack = require('webpack');
// const ClosureCompiler = require('google-closure-compiler-js').webpack;

module.exports = {
	// Media Tag entry point
	entry: {
		'media-tag': [
			'babel-polyfill', // Needed for IE11
			'./src/media-tag.js'
		],
		'media-tag-crypto': [
			'babel-polyfill', // Needed for IE11
			'./src/media-tag-crypto.js'
		]
	},

	// Output library bundle at ./dist
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'dist'),
		library: 'mediaTag'
	},

	// Enable sourcemaps for debugging webpack output.
	devtool: 'source-map', // No difference in the output JS

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
					presets: ['env'] // ,
					// plugins: ['transform-runtime', {
					// 	helpers: true, // defaults to true
					// 	polyfill: true, // defaults to true
					// 	regenerator: true, // defaults to true
					// 	moduleName: 'babel-runtime' // defaults to "babel-runtime"
					// }]
				}
			}
		]
	},

	// Enable development server
	devServer: {
		contentBase: path.join(__dirname, 'demo'),
		compress: true
	},

	plugins: [
	// 	new ClosureCompiler({
	// 		options: {
	// 			languageIn: 'ECMASCRIPT6',
	// 			languageOut: 'ECMASCRIPT5',
	// 			compilationLevel: 'ADVANCED',
	// 			warningLevel: 'VERBOSE'
	// 		}
	// 	})
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),

		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),

		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			beautify: false,
			mangle: {
				screw_ie8: true, // eslint-disable-line camelcase
				keep_fnames: false // eslint-disable-line camelcase
			},
			compress: {
				screw_ie8: true // eslint-disable-line camelcase
			},
			comments: false
		})
	]
};
