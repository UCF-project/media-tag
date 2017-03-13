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
	console.log('key enc', key.length);
	console.log('nonce enc', nonce.length);
	return nacl.secretbox(message, nonce, key);
}
function decrypt(key, nonce, box) {
	console.log('key dec', key.length);
	console.log('nonce dec', nonce.length);
	return nacl.secretbox.open(box, nonce, key);
}

// Generate key
const inputKey = document.querySelector('.key input');
document.querySelector('.key button').addEventListener('click', function () {
	inputKey.value = encodeBase64(generateRandomKey());
	console.log('key gen', decodeBase64(inputKey.value).length);
});

// Generate nonce
const inputNonce = document.querySelector('.nonce input');
document.querySelector('.nonce button').addEventListener('click', function () {
	inputNonce.value = encodeBase64(generateRandomNonce());
	console.log('nonce gen', decodeBase64(inputNonce.value).length);
});


//  ==> Encrypt

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
	console.log('key rec file', k.length);
	console.log('nonce rec file', n.length);
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

// Download encrypt file button
document.querySelector('.encrypt .enc .download').addEventListener('click', function () {
	const data = new Blob([fileBlob], {type: fileType});
	saveAs(data, 'filename');
});

//  ==> Decrypt

const divDecContents = document.querySelector('.decrypt .sent .contents');
const divDecEnc = document.querySelector('.decrypt .enc .contents');
const divDecDec = document.querySelector('.decrypt .dec .contents');

// Handle file read
function receivedFileEncrypt(contentsArr, fileDecType) {
	const contentsView = new Uint8Array(contentsArr);
	divDecContents.textContent = encodeBase64(contentsView);
	const k = decodeBase64(inputKey.value);
	const n = decodeBase64(inputNonce.value);
	console.log('key rec enc file', k.length);
	console.log('nonce rec enc file', n.length);
	const b = decrypt(k, n, contentsView);
	divDecEnc.textContent = encodeBase64(b);
	const data = new Blob([b], {type: fileDecType});
	const dataURL = URL.createObjectURL(data);
	if (fileDecType === 'image/png') {
		divDecDec.innerHTML = '<img src="' + dataURL + '"/>';
	} else if (fileType === 'video/mp4') {
		divDecDec.innerHTML = '<video src="' + dataURL + '"/>';
	} else {
		divDecDec.innerHTML = '';
	}
}

// Handle file upload
document.querySelector('.decrypt .upload input').addEventListener('change', function (e) {
	console.log(e.target.files);
	// Only do things with one file
	if (e.target.files.length > 0) {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.addEventListener('load', e => {
			console.log('read dec', e.target.result, file.type);
			receivedFileEncrypt(e.target.result, file.type);
		});
		reader.readAsArrayBuffer(file);
	}
});
