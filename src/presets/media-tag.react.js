/* global document, MutationObserver */
const mediaTagAPI = require('./media-tag.react.plugins');

document.addEventListener('DOMContentLoaded', () => {
	const observer = new MutationObserver(handleMutations);
	const target = document.body;
	const configuration = {
		characterData: true,
		childList: true,
		attributes: true,
		subtree: true
	};
	/**
	 * Gets the media tag elements.
	 *
	 * @param      {<type>}  mutations  The mutations
	 * @return     {Array}   The media tag elements.
	 */
	function getMediaTagElements(mutations) {
		const mediaTagElements = [];

		mutations.forEach(mutation => {
			if (mutation.addedNodes) {
				mutation.addedNodes.forEach(node => {
					const elements = find(node, 'MEDIA-TAG').filter(hasIdleMediaObjects);
					mediaTagElements.push(...elements);

					if (node.nodeName === 'MEDIA-TAG') {
						mediaTagElements.push(node);
					}
				});
			}
			if (mutation.target.nodeName === 'MEDIA-TAG') {
				/**
				 * Avoid mutation due to MediaTag end process ...
				 */
				if (mutation.type !== 'childList') {
					/**
					 * We don't store two times a same mutated element.
					 */
					if (!mediaTagElements.includes(mutation.target)) {
						mediaTagElements.push(mutation.target);
					}
				}
			}
		});

		return mediaTagElements;
	}

	/**
	 * Determines if it has idle media objects.
	 *
	 * @param      {<type>}   mediaTagElement  The media tag element
	 * @return     {boolean}  True if has idle media objects, False otherwise.
	 */
	function hasIdleMediaObjects(mediaTagElement) {
		if (mediaTagElement.mediaObjects) {
			return mediaTagElement.mediaObjects.some(mediaObject => {
				return mediaObject.state === 'idle';
			});
		} else if (mediaTagElement.mediaObject) {
			return mediaTagElement.mediaObject.state === 'idle';
		}
		return true;
	}

	/**
	 * Searches for the first match.
	 *
	 * @param      {<type>}  element  The element
	 * @param      {<type>}  tag      The tag
	 * @return     {Array}   { description_of_the_return_value }
	 */
	function find(element, tag) {
		let nodes = [];

		if (!element.children) {
			return nodes;
		}
		for (const child of element.children) {
			if (child.nodeName === tag) {
				nodes.push(child);
			}
			nodes = nodes.concat(find(child, tag));
		}
		return nodes;
	}

	/**
	 * { function_description }
	 *
	 * @param      {<type>}   mediaTagElements  The media tag elements
	 * @return     {Promise}  { description_of_the_return_value }
	 */
	function launch(mediaTagElements) {
		return new Promise((resolve, reject) => {
			try {
				if (mediaTagElements.length > 0) {
					mediaTagAPI(mediaTagElements);
				}
				resolve();
			} catch (err) {
				reject(err);
			}
		});
	}

	/**
	 * { function_description }
	 *
	 * @param      {<type>}  mutations  The mutations
	 */
	function handleMutations(mutations) {
		launch(getMediaTagElements(mutations)).catch(err => {
			console.error(err);
		});
	}

	observer.observe(target, configuration);
	launch(Array.from(document.getElementsByTagName('media-tag')));
});

module.exports = mediaTagAPI;
