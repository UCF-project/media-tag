/* global document, FileReader, Blob, saveAs, URL, nacl */
// Based on the code at:
// https://github.com/dchest/tweetnacl-js/blob/master/nacl-fast.js
// https://github.com/dchest/tweetnacl-util-js/blob/master/nacl-util.js

function encodeBase64(arr) {
	if (typeof btoa === 'undefined') {
		return (new Buffer(arr)).toString('base64');
	}
	let i;
	const s = [];
	const len = arr.length;
	for (i = 0; i < len; i++) {
		s.push(String.fromCharCode(arr[i]));
	}
	return btoa(s.join(''));
}

function decodeBase64(s) {
	if (typeof atob === 'undefined') {
		return new Uint8Array(Array.prototype.slice.call(new Buffer(s, 'base64'), 0));
	}
	let i;
	const d = atob(s);
	const b = new Uint8Array(d.length);
	for (i = 0; i < d.length; i++) {
		b[i] = d.charCodeAt(i);
	}
	return b;
}

function generateRandomKey() {
	return nacl.randomBytes(nacl.secretbox.keyLength);
}
function generateRandomNonce() {
	return nacl.randomBytes(nacl.secretbox.nonceLength);
}

function encrypt(key, nonce, message) {
	console.log('key 2', key.length);
	console.log('nonce 2', nonce.length);
	return nacl.secretbox(key, nonce, message);
}
function decrypt(key, nonce, box) {
	return nacl.secretbox.open(key, nonce, box);
}

// Generate key
const inputKey = document.querySelector('.key input');
document.querySelector('.key button').addEventListener('click', function () {
	inputKey.value = encodeBase64(generateRandomKey());
	console.log('key l', decodeBase64(inputKey.value).length);
});

// Generate nonce
const inputNonce = document.querySelector('.nonce input');
document.querySelector('.nonce button').addEventListener('click', function () {
	inputNonce.value = encodeBase64(generateRandomNonce());
	console.log('nonce l', decodeBase64(inputNonce.value).length);
});


const divContents = document.querySelector('.encrypt .sent .contents');
const divEnc = document.querySelector('.encrypt .enc .contents');
const divDec = document.querySelector('.encrypt .dec .contents');
let fileBlob;
let fileType = '';


// Handle file ArrayBuffer
function receivedFileArray(contentsArr) {
	const contentsView = new Uint8Array(contentsArr);
	divContents.textContent = encodeBase64(contentsView);
	const k = decodeBase64(inputKey.value);
	const n = decodeBase64(inputNonce.value);
	console.log('key l', decodeBase64(inputKey.value).length);
	console.log('nonce l', decodeBase64(inputNonce.value).length);
	fileBlob = encrypt(k, n, contentsView);
	divEnc.textContent = encodeBase64(fileBlob);
	const bDec = decrypt(k, n, fileBlob);
	const data = new Blob([bDec], {type: fileType});
	const dataURL = URL.createObjectURL(data);
	if (fileType === 'image/png') {
		divDec.innerHTML = '<img src="' + dataURL + '"/>';
	} else if (fileType === 'video/mp4') {
		divDec.innerHTML = '<video src="' + dataURL + '"/>';
	} else {
		divDec.innerHTML = encodeBase64(bDec);
	}
}

// Handle when user select a file
document.querySelector('.encrypt .upload input')
.addEventListener('change', function (e) {
	if (e.target.files.length > 0) {
		const file = e.target.files[0];
		fileType = file.type;
		const reader = new FileReader();
		reader.addEventListener('load', e => {
			console.log('read', e.target.result);
			receivedFileArray(e.target.result);
		});
		reader.readAsArrayBuffer(file);
	}
});
const divDownload = document.querySelector('.encrypt .enc .download');
// let dataURL;
divDownload.addEventListener('click', function () {
	const data = new Blob([fileBlob], {type: fileType});
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
	const b = decrypt(k, n, contents);
	divDecEnc.textContent = b;
	const bDecdec = decodeBase64(b);
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
