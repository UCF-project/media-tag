/* global document, FileReader, MediaTag, Blob, saveAs, URL */

const inputKey = document.querySelector('.key input');
document.querySelector('.key button').addEventListener('click', function () {
	inputKey.value = MediaTag.enc.generateRandomKey();
	console.log('key l', MediaTag.enc.decodeBase64(inputKey.value).length);
});

const inputNonce = document.querySelector('.nonce input');
document.querySelector('.nonce button').addEventListener('click', function () {
	inputNonce.value = MediaTag.enc.generateRandomNonce();
	console.log('nonce l', MediaTag.enc.decodeBase64(inputNonce.value).length);
});

const divContents = document.querySelector('.encrypt .sent .contents');
const divEnc = document.querySelector('.encrypt .enc .contents');
const divDec = document.querySelector('.encrypt .dec .contents');

let b;
let fileType = '';
// function receivedFile(contents) {
// 	divContents.textContent = contents;
// 	const k = inputKey.value;
// 	const n = inputNonce.value;
// 	b = MediaTag.enc.encrypt(k, n, contents);
// 	divEnc.textContent = b;
// 	divDec.textContent = MediaTag.enc.decrypt(k, n, b);
// }

function receivedFileArray(contentsArr) {
	// const contentsView = Uint8Array(contentsArr);
	const contents = MediaTag.enc.encodeBase64(contentsArr);
	divContents.textContent = contents;
	const k = inputKey.value;
	const n = inputNonce.value;
	b = MediaTag.enc.encrypt(k, n, contents);
	divEnc.textContent = b;
	const bDec = MediaTag.enc.decrypt(k, n, b);
	const bDecdec = MediaTag.enc.decodeBase64(bDec);
	const data = new Blob([bDecdec], {type: fileType});
	const dataURL = URL.createObjectURL(data);
	if (fileType === 'image/png') {
		divDec.innerHTML = '<img src="' + dataURL + '"/>';
	} else {
		divDec.innerHTML = bDec;
	}
}

const input = document.querySelector('.encrypt .upload input');

input.addEventListener('change', function (e) {
	console.log(e.target.files);

	// Only do things with one file
	if (e.target.files.length > 0) {
		const file = e.target.files[0];
		fileType = file.type;
		const reader = new FileReader();

		// reader.addEventListener('load', e => {
		// 	console.log('read', e.target.result);
		// 	receivedFile(e.target.result);
		// });
		// reader.readAsText(file);

		reader.addEventListener('load', e => {
			console.log('read', e.target.result);
			receivedFileArray(e.target.result);
		});
		reader.readAsArrayBuffer(file);
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
	const bDecdec = MediaTag.enc.decodeBase64(b);
	const data = new Blob([bDecdec], {type: fileDecType});
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
