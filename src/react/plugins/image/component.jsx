import React from 'react';

/**
 * @brief      Class for image.
 */
class ImageComponent extends React.Component {
	/**
	 * @brief      Constructs the object.
	 *
	 * @param      props  The properties
	 */
	constructor(props) {
		super(props);
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

module.exports = ImageComponent;
