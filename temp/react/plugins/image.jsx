import React from 'react';

/**
 * @brief      Class for image.
 */
class Image extends React.Component {
	/**
	 * @brief      Constructs the object.
	 *
	 * @param      props  The properties
	 */
	constructor(props) {
		super(props);

		/**
		 * Avoid media-tag attachComponent for this component children.
		 */
		// const properties = Object.keys(this.props).filter(key => {
		// 	return !/attach-component/.exec(key);
		// }).reduce((object, key) => {
		// 	object.key = this.props[key];
		// }, {});

		// this.state = {
		// 	props: properties
		// }
	}

	/**
	 * @brief      { function_description }
	 *
	 * @return     { description_of_the_return_value }
	 */
	render() {
		return (
			<img {...this.props}></img>
		);
	}
}

module.exports = Image;
