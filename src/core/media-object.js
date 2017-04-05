import debugFactory from 'debug';
import Engine from './engine';
import Parser from './parser';

const debug = debugFactory('MT:MediaObject');

/**
 * Media Object is created for each media-tag and contains the
 * information about its contents. It also has helpers functions that
 * can be used by plugins to add functionality to media-tag.
 *
 * @class MediaObject
 * @since 0.2.0
 */
class MediaObject {

	/**
	 * Creates an instance of MediaObject.
	 * @param {Object} options Object with attributes that will specify the contents.
	 * @param {HTMLElement} rootElement HTMLElement DOM Node that acts as container to this object.
	 *
	 * @memberOf MediaObject
	 */
	constructor(options, rootElement) {
		// TODO: parse src into url parts (protocol, domain, extension, etc)

		debug(`Creating media object.`);

		/**
		 * Generate a unique id for this MediaObject.
		 */
		this.__uid = Engine.uid();

		/**
		 * @type {Object} __info Object with attributes that will specify the contents.
		 */
		this.__info = options;

		/**
		 * @type {HTMLElement} rootElement HTMLElement DOM Node that acts as
		 * container to this object.
		 */
		// this.rootElement = rootElement;

		// TODO: rethink about what is the best, explicit bind needed
		// functions OR saving the node
		this.hookedFns = {
			hasChildNodes: rootElement.hasChildNodes.bind(rootElement),
			removeChild: rootElement.removeChild.bind(rootElement),
			getLastChild: () => rootElement.lastChild,
			appendChild: rootElement.appendChild.bind(rootElement)
		};

		/**
		 * Parsing of options to extract mediaObject's properties
		 */
		this.setProperties(Parser.parse(this));

		/**
		 * Starts up the engine on mediaObject which process all operations
		 * possible from filters until plugin detection.
		 */
		Engine.startup(this);

		debug(`Starting media`);
	}

	/**
	 * Sets the properties. Properties are unique, no redefinition otherwise throws error.
	 *
	 * @param      {Object}  properties  The properties
	 */
	setProperties(properties) {
		for (const key in properties) {
			if (this[key]) {
				throw new Error('The property ' + key + ' already exists in this MediaObject !');
			}
			this[key] = properties[key];
		}
	}

	/**
	 * Gets the identifier.
	 *
	 * @return     {Number}  The identifier.
	 */
	getId() {
		return this.__uid;
	}

	/**
	 * Returns the associated HTMLElement.
	 *
	 * @returns HTMLElement rootElement HTMLElement DOM Node that acts as container to this object.
	 *
	 * @memberOf MediaObject
	 */
	// getRootElement() {
	// 	return this.rootElement;
	// }

	// TODO: define what will be direct method and what will be by getAttribute
	/**
	 * Returns the value of a given attribute.
	 *
	 * @param {string} attrName Attribute identifier.
	 * @returns any the contents of the attribute.
	 *
	 * @memberOf MediaObject
	 */
	getAttribute(attrName) {
		return this.__info[attrName];
	}

	/**
	 * Returns all the attribute identifiers that starts with 'data-attr'.
	 * These attributes are normally passed down to the final element.
	 *
	 * @returns string[] List of attribute identifiers.
	 *
	 * @memberOf MediaObject
	 */
	getAllDataAttrKeys() {
		return Object.keys(this.__info).filter(field => field.startsWith('data-attr'));
	}

	/**
	 * Returns the media content extension when available.
	 *
	 * @returns string Extension of media. For example, if the media
	 * source is "image.png" the extension is "png".
	 *
	 * @memberOf MediaObject
	 */
	getExtension() {
		return this.extension;
	}

	/**
	 * Returns the media content mime type when available.
	 *
	 * @returns string Media mime type. For example, if the media
	 * source is "image.png" the mime type is "image/png".
	 *
	 * @memberOf MediaObject
	 */
	getMimeType() {
		return this.mime;
	}

	/**
	 * Check for existence of a given attribute.
	 *
	 * @param {string} attributeName Attribute identifier to be checked.
	 * @returns Boolean true if attribute exists, false otherwise.
	 *
	 * @memberOf MediaObject
	 */
	hasAttribute(attributeName) {
		return attributeName in this.__info;
	}

	/**
	 * Return the data-type attribute value.
	 *
	 * @returns string data-type attribute value.
	 *
	 * @memberOf MediaObject
	 */
	getType() {
		return this.type;
	}

	clearContents() {
		while (this.hookedFns.hasChildNodes()) {
			this.hookedFns.removeChild(this.hookedFns.getLastChild());
		}

		debug(`All media contents cleared.`);
	}

	/**
	 * Replace the contents of the container, associated to the object,
	 * by the given nodes. All previous contents of the container are
	 * erased.
	 *
	 * @param {HTMLElement[]} nodes List of HTMLElement nodes.
	 *
	 * @memberOf MediaObject
	 */
	replaceContents(nodes) {
		// Cleanup element
		// this.rootElement.innerHTML = '';
		this.clearContents();

		// Add nodes to rootElement
		// nodes.forEach(node => this.rootElement.appendChild(node));
		nodes.forEach(node => this.hookedFns.appendChild(node));
		debug(`Media contents replaced.`);
	}

	/**
	 * Sets all data-attr-* to * on the given element. For example,
	 * given a media-tag with data-attr-width="200px", this function
	 * will set element.setAttribute('width', '200px'). Notice that
	 * the attribute set have the prefix 'data-attr-' removed.
	 *
	 * @param {HTMLElement} element Element that will have attributes set.
	 *
	 * @memberOf MediaObject
	 */
	utilsSetAllDataAttributes(element) {
		debug(`Setting data attributes.`);
		const dataAttributes = this.getAllDataAttrKeys();
		dataAttributes.forEach(dataAttr => element.setAttribute(dataAttr.substr(10), this.getAttribute(dataAttr)));
	}

	/**
	 * Pass to the given element all data-attr-* attributes. For
	 * example, given a media-tag with data-attr-width="200px", this
	 * function will set element.setAttribute('data-attr-width','200px').
	 * Notice that the attribute set has still the prefix 'data-attr-'.
	 *
	 * @param {HTMLElement} element Element that will have attributes set.
	 *
	 * @memberOf MediaObject
	 */
	utilsPassAllDataAttributes(element) {
		debug(`Passing data attributes.`);
		const dataAttributes = this.getAllDataAttrKeys();
		dataAttributes.forEach(dataAttr => element.setAttribute(dataAttr, this.getAttribute(dataAttr)));
	}

	setAttribute(name, value) {
		this.__info[name] = value;
	}

	removeAttribute(name) {
		delete this.__info[name];
	}
}

export default MediaObject;
