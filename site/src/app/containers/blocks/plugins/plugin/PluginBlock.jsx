import React from 'react';

import PluginBlockContent from './components/PluginBlockContent.jsx';

/**
 * @brief      Class for plugin block.
 */
class PluginBlock extends React.Component {
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
			<div className={'flex fit background-white'}>
				<PluginBlockContent
					title={this.props.htmlTitle}
					body={this.props.htmlBody} />
				<PluginBlockContent
					title={this.props.viewTitle}
					body={this.props.viewBody} />
			</div>
		);
	}
}

export default PluginBlock;
