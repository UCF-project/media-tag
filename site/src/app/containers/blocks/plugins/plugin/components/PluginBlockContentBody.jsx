import React from 'react';

class PluginBlockContentBody extends React.Component {
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
			<div className={'fit v-aligned h-aligned'}>
				{this.props.body}
			</div>
		);
	}
}

export default PluginBlockContentBody;
