import React from 'react';

/**
 * @brief      Class for image.
 */
class VideoComponent extends React.Component {
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
			<video {...this.props} controls></video>
		);
	}
}

module.exports = VideoComponent;
