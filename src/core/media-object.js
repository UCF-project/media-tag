import Errors from './errors';
import Plugin from './plugin';

class MediaObject {

	constructor(options, rootElement) {
        // TODO: parse src into url parts (protocol, domain, extension, etc)
		this.__info = options;
		this.rootElement = rootElement;

		console.log({options});
        // Identify type
		this.contentTypeId = Plugin.findType(this);
		if (!this.contentTypeId) {
			throw new Errors.TypeNotFound(this);
		}

        // Startup
		const contentType = Plugin.getPlugin(this.contentTypeId);
		contentType.startup(this);
	}

	getRootElement() {
		return this.rootElement;
	}

    // TODO: define what will be direct method and what will be by getAttribute
	getAttribute(field) {
		return this.__info[field];
	}

	getAllDataAttrKeys() {
		return Object.keys(this.__info).filter(field => field.startsWith('data-attr'));
	}

	getExtension() {
		return this.__info.extension;
	}

	getMimeType() {
		return this.__info.mimeType;
	}

	hasAttribute(attributeName) {
		return attributeName in this.__info;
	}

	getType() {
		return this.__info['data-type'];
	}

	replaceContents(nodes) {
        // Cleanup element
		this.rootElement.innerHTML = '';

        // Add nodes to rootElement
		nodes.forEach(node => this.rootElement.appendChild(node));
	}

	utilsSetAllDataAttributes(element) {
		const dataAttributes = this.getAllDataAttrKeys();
		dataAttributes.forEach(dataAttr => element.setAttribute(dataAttr.substr(10), this.getAttribute(dataAttr)));
	}

	utilsPassAllDataAttributes(element) {
		const dataAttributes = this.getAllDataAttrKeys();
		dataAttributes.forEach(dataAttr => element.setAttribute(dataAttr, this.getAttribute(dataAttr)));
	}

}

export default MediaObject;
