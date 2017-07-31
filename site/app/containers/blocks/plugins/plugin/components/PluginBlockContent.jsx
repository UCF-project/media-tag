import React from 'react';

import PluginBlockContentTitle from './PluginBlockContentTitle.jsx';
import PluginBlockContentBody from './PluginBlockContentBody.jsx';

class PluginBlockContent extends React.Component {
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
			<div className={'flex split column h-aligned padded scrollable'}>
				<PluginBlockContentTitle title={this.props.title} />
				<PluginBlockContentBody body={this.props.body} />
			</div>
		);
	}
}

export default PluginBlockContent;
