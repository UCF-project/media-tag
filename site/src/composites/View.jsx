import React from 'react';
import Nav from '../components/Nav.jsx';
import NavItem from '../components/NavItem.jsx';
import Viewer from '../components/Viewer.jsx';

export default class View extends React.Component {
	constructor(props) {
		super(props);
		this.handleViewerChange = this.handleViewerChange.bind(this);
		this.navItem = this.navItem.bind(this);
		this.state = {
			activeSource: '/pages/home.html'
		}
	}

	navItem(text, targetUrl) {
		return (
			<NavItem 
				text={text} 
				onClick={() => { this.handleViewerChange(targetUrl) }}/>
		);
	}

	handleViewerChange(targetUrl) {
		this.setState({
			activeSource: targetUrl || '/pages/configuration.html'
		});
	}

	render() {
		return (
			<div className='view'>
				<Nav title="Media-Tag">
					{this.navItem('Home', '/pages/home.html')}
			 		{this.navItem('Configuration', '/pages/configuration.html')}
			 		{this.navItem('Plugins', '/pages/plugins.html')}
				</Nav>
				<Viewer src={this.state.activeSource} />
			</div>
		);
	}
}
