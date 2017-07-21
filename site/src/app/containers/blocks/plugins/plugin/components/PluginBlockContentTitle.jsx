import React from 'react';

class PluginBlockContentTitle extends React.Component {
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
			<h3 className={''}>
				{this.props.title}
			</h3>
		);
	}
}

export default PluginBlockContentTitle;
