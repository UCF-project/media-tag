// import * as nacl from 'tweetnacl';

// // https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
// // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_.22Unicode_Problem.22

// // function encodeBase64(str) {
// // 	String.fromCharCode.apply(null, str);
// // }
// // function encodeBase64(str) {
// //     // return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
// //     //     return String.fromCharCode('0x' + p1);
// //     // }));
// // }

// // function decodeBase64(str) {
// // 	String.charCodeAt.apply(null, str);
// // }
// // function decodeBase64(str) {
// //     // return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
// //     //     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
// //     // }).join(''));
// // }

// function encodeBase64(buf) {
//   return String.fromCharCode.apply(null, new Uint8Array(buf));
// }

// function decodeBase64(str) {
//   // var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
//   // var bufView = new Uint16Array(buf);
//   const b = new Uint8Array(str.length);
//   for (var i=0, strLen=str.length; i<strLen; i++) {
//     b[i] = str.charCodeAt(i);
//   }
//   return b;
// }

// // function encodeUTF8(str) {
// // 	return str;
// // }

// // function decodeUTF8(str) {
// // 	return str;
// // }

// function generateRandomKey() {
// 	return encodeBase64(nacl.randomBytes(nacl.secretbox.keyLength));
// }

// function generateRandomNonce() {
// 	return encodeBase64(nacl.randomBytes(nacl.secretbox.nonceLength));
// }

// function decodeKey(key) {
// 	try {
// 		var k = decodeBase64(key);
// 		if (k.length != nacl.secretbox.keyLength) {
// 			throw new Error('Bad key length: must be ' + nacl.secretbox.keyLength + ' bytes');
// 		}
// 		return k;
// 	} catch(err) {
// 		throw new Error('Failed to decode key from Base64 ' + err.message);
// 	}
// }

// function decodeNonce(nonce) {
// 	try {
// 		var n = decodeBase64(nonce);
// 		if (n.length != nacl.secretbox.nonceLength) {
// 			throw new Error('Bad nonce length: must be ' + nacl.secretbox.nonceLength + ' bytes');
// 		}
// 		return n;
// 	} catch(err) {
// 		throw new Error('Failed to decode nonce from Base64 ' + err.message);
// 	}
// };

// function encrypt(key, nonce, message) {
// 	const k = decodeKey(key);
// 	const n = decodeNonce(nonce);
// 	let m;
// 	try {
// 		m = decodeBase64(message);
// 	} catch(err) {
// 		throw new Error('Cannot decode message ' + err.message);
// 	}
// 	return encodeBase64(nacl.secretbox(m, n, k));
// }

// function decrypt(key, nonce, box) {
// 	const k = decodeKey(key);
// 	const n = decodeNonce(nonce);
// 	let b;

// 	try {
// 		b = decodeBase64(box);
// 	} catch(err) {
// 		throw new Error('Cannot decode box ' + err.message);
// 	}

// 	let m = nacl.secretbox.open(b, n, k);
// 	if (m === false) {
// 		throw new Error('Failed to decrypt ' + err.message);
// 	}
// 	try {
// 		m = encodeBase64(m);
// 	} catch(err) {
// 		throw new Error('Cannot decode decrypted message to string ' + err.message);
// 	}
// 	return m;
// };

// const enc = {
// 	decodeBase64,
// 	encodeBase64,
// 	// encodeUTF8,
// 	// decodeUTF8,
// 	generateRandomKey,
// 	generateRandomNonce,
// 	decodeKey,
// 	decodeNonce,
// 	encrypt,
// 	decrypt,
// 	nacl,
// };

// export default enc;
