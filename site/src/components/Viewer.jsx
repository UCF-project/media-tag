import React from 'react';

export default class Viewer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: true
		}
		this.className = this.className.bind(this);
		this.hide = this.hide.bind(this);
		this.display = this.display.bind(this);
	}

	className() {
		return 'viewer'.concat(' ', (this.state.visible) ? 'visible' : 'invisible');
	}

	hide() {
		this.setState({visible: false});
	}

	display() {
		this.setState({visible: true});
	}

	render() {
		return (
			<iframe src={this.props.src} className={this.className()}></iframe>
		);
	}
};
