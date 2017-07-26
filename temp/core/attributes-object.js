define(function (require, exports, module) {/**
 * Class for attribute object.
 *
 * @class      AttributeObject (name)
 */
class AttributesObject {
	/**
	 * Constructs the object.
	 *
	 * @param      {Element}  element  The element
	 */
	constructor(element) {
		Object.keys(element.attributes).forEach(key => {
			this[element.attributes[key].name] = element.attributes[key].value;
		});
	}

	/**
	 * Gets the attribute.
	 *
	 * @param      {string}  attribute  The attribute
	 * @return     {Object}  The attribute.
	 */
	getAttribute(attribute) {
		return this[attribute];
	}

	/**
	 * Sets the attribute.
	 *
	 * @param      {string}  attribute  The attribute
	 * @param      {Object}  value      The value
	 */
	setAttribute(attribute, value) {
		this[attribute] = value;
	}

	/**
	 * Removes an attribute.
	 *
	 * @param      {string}  attribute  The attribute
	 */
	removeAttribute(attribute) {
		delete this[attribute];
	}

	/**
	 * Determines if it has attributes.
	 *
	 * @return     {boolean}  True if has attributes, False otherwise.
	 */
	hasAttributes() {
		return Object.keys(this) > 0;
	}
}

module.exports = AttributesObject;

});
