/* global document */
const Action = require('../actions/action');
const AttributesObject = require('./attributes-object');
const MediaObject = require('./media-object');
/**
 * Class for media tag.
 *
 * @class      MediaTag (name)
 */
class MediaTag {
	/**
	 * Constructs the object.
	 *
	 * @param      {Element}  mediaTagElement  The media element
	 */
	constructor(mediaTagElement, processingEngine) {
		this.mediaTagElement = mediaTagElement;
		this.processingEngine = processingEngine;

		const attributeObject = new AttributesObject(mediaTagElement);
		const sourcesAttribute =
			attributeObject.getAttribute('sources') || attributeObject.getAttribute('srcs');

		if (sourcesAttribute) {
			const sourceObjects = this.extractSourceObjects(sourcesAttribute);
			const mediaElements = this.extractMediaElements(sourceObjects);

			this.mediaElements = mediaElements;
			this.mediaElements.forEach(mediaElement => {
				this.mediaTagElement.appendChild(mediaElement);
			});
			this.mediaObjects = this.createMediaObjects(mediaElements);

			Action.activate(this.mediaObjects[0], this);

			/**
			 * Fake actions event binding ...
			 */
			// const mediaObjectVideo = this.mediaObjects[0];
			// const mediaObjectImage = this.mediaObjects[2];

			// Offline.on('down', () => {
			// 	Action.activate(mediaObjectImage, this);
			// }, 'down');

			// Offline.on('up', () => {
			// 	Action.activate(mediaObjectVideo, this);
			// }, 'up');

			// const interval = () => {
			// 	let i = 0;
			// 	let step = -1;
			// 	setInterval(() => {
			// 		console.log(i);
			// 		if (i === 0 || i === this.mediaObjects.length - 1) {
			// 			step *= -1;
			// 		}
			// 		if (step > 0) {
			// 			Action.upgrade(this);
			// 		} else {
			// 			Action.downgrade(this);
			// 		}
			// 		i += step;
			// 	}, 3000);
			// };

			// interval();
		} else {
			const mediaObject = new MediaObject(mediaTagElement);
			this.mediaObjects = [mediaObject];
			this.activeMediaObject = this.mediaObjects[0];

			// console.log(this.activeMediaObject);
		}
	}

	/**
	 * Extracts source objects from a sources attribute.
	 *
	 * @param      {string}  sourcesAttribute  The sources attribute
	 * @return     {Array}
	 */
	extractSourceObjects(sourcesAttribute) {
		return JSON.parse(sourcesAttribute);
	}

	/**
	 * Extracts media elements from source object list.
	 *
	 * @param      {Array<Object>}  sourceObjects  The source objects
	 * @return     {Array}
	 */
	extractMediaElements(sourceObjects) {
		const mediaElements = [];

		sourceObjects.forEach(sourceObject => {
			mediaElements.push(this.extractMediaElement(sourceObject));
		});

		return mediaElements;
	}

	extractMediaElement(sourceObject) {
		const mediaElement = document.createElement('media');

		Object.keys(sourceObject).forEach(attribute => {
			mediaElement.setAttribute(attribute, sourceObject[attribute]);
		});

		return mediaElement;
	}

	/**
	 * Creates media objects.
	 *
	 * @param      {Array<Element>}  mediaElements  The media elements
	 * @return     {Array}
	 */
	createMediaObjects(mediaElements) {
		const mediaObjects = [];

		mediaElements.forEach(mediaElement => {
			const mediaObject = new MediaObject(mediaElement);

			mediaObjects.push(mediaObject);
		});

		return mediaObjects;
	}
}

module.exports = MediaTag;
