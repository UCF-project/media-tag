const fs = require('fs');

const files = [
	'./dist/media-tag.js',
	'./dist/media-tag-crypto.js',
	'./dist/test.js'];

const replacements = {
	'g = g || Function("return this")() || (1, eval)("this");': 'g = g || Function("return this")();'
};

/**
 * To replace some matching substrings by another and save it;
 *
 * @param      {String}  		files          The files
 * @param      {Object}  replacements      The replacements
 */

function replace(files, replacements) {
	for (const file of files) {
		console.log('Processing %s', file);
		fs.exists(file, exists => {
			if (exists) {
				console.log('%s exists', file);
				fs.readFile(file, (error, data) => {
					if (error) {
						throw error;
					}

					let dataString = String(data);

					for (const substring in replacements) {
						if (substring !== '') {
							dataString = dataString.replace(substring, replacements[substring]);
						}
					}

					fs.writeFile(file, dataString, error => {
						if (error) {
							throw error;
						}
						console.log(file + ' is eval cleaned');
					});
				});
			}
		});
	}
}

replace(files, replacements);
