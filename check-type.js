const fs = require('fs');
const ClosureCompiler = require('google-closure-compiler-js');

const jsSourceFile = './dist/media-tag.js';
const jsSourceFileMap = './dist/media-tag.js.map';

fs.readFile(jsSourceFileMap, 'utf8', (err, dataMap) => {
	if (err) {
		return console.log(err);
	}
	fs.readFile(jsSourceFile, 'utf8', (err, data) => {
		if (err) {
			return console.log(err);
		}
		const flags = {
			checksOnly: true,
			warningLevel: 'VERBOSE',
			jsCode: [{path: jsSourceFile, src: data, sourceMap: dataMap}]
		};
		console.log(ClosureCompiler.compile(flags));
	});
});
