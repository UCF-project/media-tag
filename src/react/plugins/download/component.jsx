import React from 'react';

/**
 * Class for download component.
 *
 * @class      DownloadComponent (name)
 */
class DownloadComponent extends React.Component {
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
		const { buttonMessage, ...rest } = this.props;
		return (
			<button {...rest}>{buttonMessage}</button>
		);
	}
}

module.exports = DownloadComponent;
