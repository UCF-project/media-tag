import test from 'ava';
import PluginImage from '../../src/plugins/image';

test('image is correctly detected', t => {
	const mediaObjMock = {
		hasAttribute: () => true,
		getExtension: () => 'png'
	};
	const isImage = PluginImage.typeCheck(mediaObjMock);
	t.true(isImage);
});
