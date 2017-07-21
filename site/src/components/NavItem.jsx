import React from 'react';

export default class NavItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li 
				className="nav-item"
				onClick={this.props.onClick}>
				{this.props.text}
			</li>
		);
	}
}