import React from 'react';

import Layer from './containers/Layer.jsx';
import Menu from './containers/Menu.jsx';
import Page from './containers/Page.jsx';
import Home from './pages/Home.jsx';
import Installation from './pages/Installation.jsx';
import Configuration from './pages/Configuration.jsx';
import Plugins from './pages/Plugins.jsx';

import { List, ListItem, ListItemContent, Header } from 'react-mdl';

/**
 * @brief      Class for main.
 */
class Main extends React.Component {
	/**
	 * @brief      Constructs the object.
	 *
	 * @param      props  The properties
	 */
	constructor(props) {
		super(props);
		this.state = {
			page: Home()
		}
	}

	/**
	 * @brief      { function_description }
	 *
	 * @return     { description_of_the_return_value }
	 */
	render() {
		return (
			<Layer class='flex fit column'>
				<Header title='Media-Tag'></Header>
				<Layer class='flex fit'>
					<Menu class='nav'>
						<List>
							<ListItem onClick={() => { this.setState({page: Home()})}}>
								<ListItemContent icon='home'>Home</ListItemContent>
							</ListItem>
							<ListItem onClick={() => { this.setState({page: Installation()})}}>
								<ListItemContent icon='assignment'>Installation</ListItemContent>
							</ListItem>
							<ListItem onClick={() => { this.setState({page: Configuration()})}}>
								<ListItemContent icon='settings'>Configuration</ListItemContent>
							</ListItem>
							<ListItem onClick={() => { this.setState({page: Plugins()})}}>
								<ListItemContent icon='star'>Plugins</ListItemContent>
							</ListItem>
						</List>
					</Menu>
					{this.state.page}
				</Layer>
			</Layer>
		);
	}
}

export default Main;
