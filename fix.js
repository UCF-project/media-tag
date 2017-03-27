const fs = require('fs');

const files = [
	'./dist/media-tag.js',
	'./dist/media-tag-crypto',
	'./dist/test.js'];

const originals = [
	'|| (1,eval)("this");',
	'|| (1,eval)("this");',
	'|| (1,eval)("this");'
];

const modifications = [
	';// || (1,eval)("this");',
	';// || (1,eval)("this");',
	';// || (1,eval)("this");'
];

/**
 * To replace some matching substrings by another and save it;
 *
 * @param      {String}  		files          The files
 * @param      {Array<String>}  originals      The originals
 * @param      {Array<String>}  modifications  The modifications
 */

function replace(files, originals, modifications) {
	for (const file of files) {
		console.log('Processing %s', file);
		fs.exists(file, exists => {
			if (exists) {
				console.log('%s exists', file);
				fs.readFile(file, (error, data) => {
					if (error) {
						throw error;
					}
					const index = files.indexOf(file);
					const string = String(data);
					const replaced = string.replace(originals[index], modifications[index]);

					console.log('replace all "%s" by "%s"', originals[index], modifications[index]);

					fs.writeFile(file, replaced, error => {
						if (error) {
							throw error;
						}
						console.log(file + ' is fixed');
					});
				});
			}
		});
	}
}

replace(files, originals, modifications);
