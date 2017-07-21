import React from 'react';

class Menu extends React.Component {
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
			<nav className={this.props.class}>{this.props.children}</nav>
		);
	}
}

export default Menu;
