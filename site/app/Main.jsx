import React from 'react';

import Layer from './containers/Layer.jsx';
import Menu from './containers/Menu.jsx';
import Page from './containers/Page.jsx';
import Home from './pages/Home.jsx';
import Installation from './pages/Installation.jsx';
import Configuration from './pages/Configuration.jsx';
import Plugins from './pages/Plugins.jsx';
import Extension from './pages/Extension.jsx';
import Reacts from './pages/React.jsx';
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
							<ListItem onClick={() => {
								window.location.hash = 'home';
								this.load(Home)
							}}>
								<ListItemContent className='menu-item' icon='home'>Home</ListItemContent>
							</ListItem>
							<ListItem onClick={() => {
								window.location.hash = 'installation';
								this.load(Installation)
							}}>
								<ListItemContent className='menu-item' icon='assignment'>Installation</ListItemContent>
							</ListItem>
							<ListItem onClick={() => {
								window.location.hash = 'configuration';
								this.load(Configuration)
							}}>
								<ListItemContent className='menu-item' icon='settings'>Configuration</ListItemContent>
							</ListItem>
							<ListItem onClick={() => {
								window.location.hash = 'extension';
								this.load(Extension)
							}}>
								<ListItemContent className='menu-item' icon='build'>Extension</ListItemContent>
							</ListItem>
							<ListItem onClick={() => {
								window.location.hash = 'react';
								this.load(Reacts)
							}}>
								<ListItemContent className='menu-item' icon='build'>React</ListItemContent>
							</ListItem>
							<ListItem onClick={() => {
								window.location.hash = 'plugins';
								this.load(Plugins)
							}}>
								<ListItemContent className='menu-item' icon='star'>Plugins</ListItemContent>
							</ListItem>

			                <ListItem>
			                  Renderers
			                </ListItem>

			                <ListItem onClick={() => {
												window.location.hash = 'image';
												this.load(Image)
											}}>
			                  <ListItemContent className='menu-item' icon='image'>Image</ListItemContent>
			                </ListItem>
			                <ListItem onClick={() => {
												window.location.hash = 'audio';
												this.load(Audio)
											}}>
			                  <ListItemContent className='menu-item' icon='music_note'>Audio</ListItemContent>
			                </ListItem>
			                <ListItem onClick={() => {
												window.location.hash = 'video';
												this.load(Video)
											}}>
			                  <ListItemContent className='menu-item' icon='movie'>Video</ListItemContent>
			                </ListItem>
			                <ListItem onClick={() => {
												window.location.hash = 'pdf';
												this.load(Pdf)
											}}>
			                  <ListItemContent className='menu-item' icon='description'>Pdf</ListItemContent>
			                </ListItem>
			                <ListItem onClick={() => {
												window.location.hash = 'dash';
												this.load(Dash)
											}}>
			                  <ListItemContent className='menu-item' icon='video_label'>Dash</ListItemContent>
			                </ListItem>
			                <ListItem onClick={() => {
												window.location.hash = 'download';
												this.load(Download)
											}}>
			                  <ListItemContent className='menu-item' icon='file_download'>Download</ListItemContent>
			                </ListItem>

			                <ListItem>
			                  Filters
			                </ListItem>

			                <ListItem onClick={() => {
												window.location.hash = 'crypto';
												this.load(Crypto)
											}}>
			                  <ListItemContent className='menu-item' icon='build'>Crypto</ListItemContent>
			                </ListItem>
			                <ListItem onClick={() => {
												window.location.hash = 'clear-key';
												this.load(ClearKey)
											}}>
			                  <ListItemContent className='menu-item' icon='build'>ClearKey</ListItemContent>
			                </ListItem>

			                <ListItem>
			                  Sanitizers
			                </ListItem>

			                <ListItem onClick={() => {
												window.location.hash = 'sanitizer';
												this.load(Sanitizer)
											}}>
			                  <ListItemContent className='menu-item' icon='healing'>Sanitizer</ListItemContent>
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
