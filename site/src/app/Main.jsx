import React from 'react';

import Layer from './containers/Layer.jsx';
import Menu from './containers/Menu.jsx';
import Page from './containers/Page.jsx';
import Home from './pages/Home.jsx';
import Installation from './pages/Installation.jsx';
import Configuration from './pages/Configuration.jsx';
import Plugins from './pages/Plugins.jsx';
import Image from './pages/Image.jsx';
import Audio from './pages/Audio.jsx';
import Video from './pages/Video.jsx';
import Pdf from './pages/Pdf.jsx';
import Dash from './pages/Dash.jsx';
import Download from './pages/Download.jsx';
import Crypto from './pages/Crypto.jsx';
import ClearKey from './pages/ClearKey.jsx';
import Sanitizer from './pages/Sanitizer.jsx';

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
			page: Home
		}
		this.load = this.load.bind(this);
	}

	load(component) {
		this.setState({
			page: component
		})
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
					<Menu class='nav scrollable'>
						<List>
							<ListItem onClick={() => {this.load(Home)}}>
								<ListItemContent icon='home'>Home</ListItemContent>
							</ListItem>
							<ListItem>
			                  Setup
			                </ListItem>
							<ListItem onClick={() => {this.load(Installation)}}>
								<ListItemContent icon='assignment'>Installation</ListItemContent>
							</ListItem>
							<ListItem onClick={() => {this.load(Configuration)}}>
								<ListItemContent icon='settings'>Configuration</ListItemContent>
							</ListItem>
							<ListItem onClick={() => {this.load(Plugins)}}>
								<ListItemContent icon='star'>Plugins</ListItemContent>
							</ListItem>
							<List>
                <ListItem>
                  Renderers
                </ListItem>
                <ListItem onClick={() => {this.load(Image)}}>
                  <ListItemContent icon='image'>Image</ListItemContent>
                </ListItem>
                <ListItem onClick={() => {this.load(Audio)}}>
                  <ListItemContent icon='music_note'>Audio</ListItemContent>
                </ListItem>
                <ListItem onClick={() => {this.load(Video)}}>
                  <ListItemContent icon='movie'>Video</ListItemContent>
                </ListItem>
                <ListItem onClick={() => {this.load(Pdf)}}>
                  <ListItemContent icon='description'>Pdf</ListItemContent>
                </ListItem>
                <ListItem onClick={() => {this.load(Dash)}}>
                  <ListItemContent icon='video_label'>Dash</ListItemContent>
                </ListItem>
                <ListItem onClick={() => {this.load(Download)}}>
                  <ListItemContent icon='file_download'>Download</ListItemContent>
                </ListItem>
                <ListItem>
                  Filters
                </ListItem>
                <ListItem onClick={() => {this.load(Crypto)}}>
                  <ListItemContent icon='build'>Crypto</ListItemContent>
                </ListItem>
                <ListItem onClick={() => {this.load(ClearKey)}}>
                  <ListItemContent icon='build'>ClearKey</ListItemContent>
                </ListItem>
                <ListItem>
                  Sanitizers
                </ListItem>
                <ListItem onClick={() => {this.load(Sanitizer)}}>
                  <ListItemContent icon='healing'>Sanitizer</ListItemContent>
                </ListItem>
              </List>
						</List>
					</Menu>
					{this.state.page}
				</Layer>
			</Layer>
		);
	}
}

export default Main;
