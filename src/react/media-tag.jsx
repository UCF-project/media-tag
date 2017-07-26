import React from 'react';

/**
 * @brief      Class for image.
 */
class MediaTag extends React.Component {
	/**
	 * @brief      Constructs the object.
	 *
	 * @param      props  The properties
	 */
	constructor(props) {
		super(props);

		/**
		 * { item_description }
		 */
		this.state = {
			component: null
		}
	}
	
	/**
	 * @brief      { function_description }
	 *
	 * @return     { description_of_the_return_value }
	 */
	render() {
		return (
			<media-tag {...this.props}>
				{this.state.component}
			</media-tag>
		);
	}
}

module.exports = MediaTag;
