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
		const {classname, autoplay, ...props} = this.props;

		return (
			<video {...props} className={classname} autoPlay={autoplay} controls></video>
		);
	}
}

module.exports = VideoComponent;
