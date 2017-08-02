import React from 'react';

/**
 * @brief      Class for image.
 */
class PdfComponent extends React.Component {
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
		const {classname, ...props} = this.props;

		return (
			<iframe className={classname} {...props}></iframe>
		);
	}
}

module.exports = PdfComponent;
