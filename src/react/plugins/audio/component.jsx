import React from 'react';

/**
 * @brief      Class for image.
 */
class AudioComponent extends React.Component {
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
			<audio {...this.props} controls></audio>
		);
	}
}

module.exports = AudioComponent;
