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
			<div className={'flex fit'}>
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

/**

<div className={'flex fit'}>
				<div className={'flex split column h-aligned'}>
					<h3>html</h3>
					<p>
						alzkalkz zkalz amlkzmla zamzmalmzmlkamlz amjz<br />
						alzkalkz zkalz amlkzmla zamzmalmzmlkamlz amjz<br />
						lz amlkzmla zamzmalmzmlkamlz amjz<br />
						alzkalkz zkalz amlkzmla zamzmalmzmlkamlz amjz<br />
					</p>
				</div>
				<div className={'flex split column h-aligned'}>
					<h3>View</h3>
					<div className={'flex page fit column h-aligned v-aligned'}>
						<MediaTag
							class="flex fit-height v-aligned h-aligned"
							data-attr-class="fit"
							src="/assets/images/media-tag-logo-text.png"
							data-type="image/png">
						</MediaTag>
					</div>
				</div>
			</div>

 */

export default PluginBlock;
