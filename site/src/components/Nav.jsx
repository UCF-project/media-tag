import React from 'react';

export default class Nav extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="nav">
				{this.props.title}
				<ul className="nav-item-list">{this.props.children}</ul>
			</nav>
		);
	}
}