/* global document, FileReader, MediaTag, Blob, saveAs, URL */

const inputKey = document.querySelector('.key input');
document.querySelector('.key button').addEventListener('click', function () {
	inputKey.value = MediaTag.enc.generateRandomKey();
});

const inputNonce = document.querySelector('.nonce input');
document.querySelector('.nonce button').addEventListener('click', function () {
	inputNonce.value = MediaTag.enc.generateRandomNonce();
});

const divContents = document.querySelector('.encrypt .sent .contents');
const divEnc = document.querySelector('.encrypt .enc .contents');
const divDec = document.querySelector('.encrypt .dec .contents');

let b;
function receivedFile(contents) {
	divContents.textContent = contents;
	const k = inputKey.value;
	const n = inputNonce.value;
	b = MediaTag.enc.encrypt(k, n, contents);
	divEnc.textContent = b;
	divDec.textContent = MediaTag.enc.decrypt(k, n, b);
}

const input = document.querySelector('.encrypt .upload input');
let fileType = '';
input.addEventListener('change', function (e) {
	console.log(e.target.files);

	// Only do things with one file
	if (e.target.files.length > 0) {
		const file = e.target.files[0];
		fileType = file.type;
		const reader = new FileReader();
		reader.addEventListener('load', e => {
			console.log('read', e.target.result);
			receivedFile(e.target.result);
		});
		reader.readAsText(file);
		// FileReader.abort()
		// FileReader.readAsArrayBuffer()
		// FileReader.readAsBinaryString()
		// FileReader.readAsDataURL()
		// FileReader.readAsText()
	}
});

const divDownload = document.querySelector('.encrypt .enc .download');
// let dataURL;
divDownload.addEventListener('click', function () {
	const data = new Blob([b], {type: fileType});
	// if (dataURL !== null) {
	// 	URL.revokeObjectURL(dataURL);
	// }
	// dataURL = URL.createObjectURL(data);
	saveAs(data, 'filename');
});

const divDecContents = document.querySelector('.decrypt .sent .contents');
const divDecEnc = document.querySelector('.decrypt .enc .contents');
const divDecDec = document.querySelector('.decrypt .dec .contents');

function receivedFileEncrypt(contents, fileDecType) {
	divDecContents.textContent = contents;
	const k = inputKey.value;
	const n = inputNonce.value;
	const b = MediaTag.enc.decrypt(k, n, contents);
	divDecEnc.textContent = b;
	const data = new Blob([b], {type: fileDecType});
	const dataURL = URL.createObjectURL(data);
	if (fileDecType === 'image/png') {
		divDecDec.innerHTML = '<img src="' + dataURL + '"/>';
	} else {
		divDecDec.innerHTML = '';
	}
}

const inputDecrypt = document.querySelector('.decrypt .upload input');
inputDecrypt.addEventListener('change', function (e) {
	console.log(e.target.files);

	// Only do things with one file
	if (e.target.files.length > 0) {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.addEventListener('load', e => {
			console.log('read dec', e.target.result, file.type);
			receivedFileEncrypt(e.target.result, file.type);
		});
		reader.readAsText(file);
	}
});
