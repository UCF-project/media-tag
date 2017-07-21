import React from 'react';

import Page from '../../Page.jsx';
import MediaTag from '../../../components/MediaTag.jsx';
import PluginBlock from './plugin/PluginBlock.jsx';

import { List, ListItem, ListItemContent } from 'react-mdl';

function video() {
	return (
		<MediaTag
			class="flex fit v-aligned h-aligned"
			data-attr-class="flex fit-width"
			src="/assets/videos/bbb.mp4"
			data-type="video/mp4">
		</MediaTag>
	);
}

	/**
	 * @brief      { function_description }
	 *
	 * @param      identifier  The identifier
	 *
	 * @return     { description_of_the_return_value }
	 */
function subPage(identifier) {
	switch (identifier) {
		case 'image': {
			return (
				<div className={'flex fit'}>
					<div className={'flex split column h-aligned show'}>
						<h3 className={'show'}>html</h3>
						<p className={'show'}>
							alzkalkz zkalz amlkzmla zamzmalmzmlkamlz amjz<br />
							alzkalkz zkalz amlkzmla zamzmalmzmlkamlz amjz<br />
							lz amlkzmla zamzmalmzmlkamlz amjz<br />
							alzkalkz zkalz amlkzmla zamzmalmzmlkamlz amjz<br />
						</p>
					</div>
					<div className={'flex split column h-aligned show'}>
						<h3>View</h3>
						<div className={'flex page fit column h-aligned v-aligned'}>
							<MediaTag
								class="flex fit-height v-aligned h-aligned show"
								data-attr-class="fit"
								src="/assets/images/media-tag-logo-text.png"
								data-type="image/png">
							</MediaTag>
						</div>
					</div>
				</div>
			);
		}
		case 'audio': {
			return (
				<div className={'flex fit'}>
					<div className={'flex split column h-aligned show'}>
						<h3 className={'show'}>html</h3>
						<p className={'show'}>
							Audio
						</p>
					</div>
					<div className={'flex split column h-aligned show'}>
						<h3>View</h3>
						<div className={'flex page fit column h-aligned v-aligned'}>
							<MediaTag
								class="flex fit v-aligned h-aligned show"
								src="/assets/audios/alterway.mp3"
								data-type="audio/mp3">
							</MediaTag>
						</div>
					</div>
				</div>
			);
		}
		case 'video': {
			return (
				<PluginBlock 
					htmlTitle={'Html'}
					htmlBody={'Penguin'}
					viewTitle={'View'}
					viewBody={video()}
				/>
			);
		}
	}
}

class PluginsBlock extends React.Component {
	/**
	 * @brief      Constructs the object.
	 *
	 * @param      props  The properties
	 */
	constructor(props) {
		super(props);

		this.state = {
			page: subPage('image')
		}
	}

	/**
	 * @brief      { function_description }
	 *
	 * @return     { description_of_the_return_value }
	 */
	render() {
		return (
			<Page class={this.props.class}>
				<div className={'flex fit column'}>
					<h1>Plugins</h1>
					<p>
						Media-tag is an open source library.<br />
						It provide features to enable media rendering.<br />
					</p>
					<div className={'flex fit background-white'}>
						<nav className={'nav scrollable'}>
							<List>
								<ListItem>
									Renderers
								</ListItem>
								<ListItem onClick={() => { this.setState({page: subPage('image')})}}>
									<ListItemContent icon='image'>Image</ListItemContent>
								</ListItem>
								<ListItem onClick={() => { this.setState({page: subPage('audio')})}}>
									<ListItemContent icon='music_note'>Audio</ListItemContent>
								</ListItem>
								<ListItem onClick={() => { this.setState({page: subPage('video')})}}>
									<ListItemContent icon='movie'>Video</ListItemContent>
								</ListItem>
								<ListItem onClick={() => { this.setState({page: Plugins()})}}>
									<ListItemContent icon='description'>Pdf</ListItemContent>
								</ListItem>
								<ListItem onClick={() => { this.setState({page: Plugins()})}}>
									<ListItemContent icon='video_label'>Dash</ListItemContent>
								</ListItem>
								<ListItem>
									Filters
								</ListItem>
								<ListItem onClick={() => { this.setState({page: Home()})}}>
									<ListItemContent icon='image'>Crypto</ListItemContent>
								</ListItem>
								<ListItem onClick={() => { this.setState({page: Installation()})}}>
									<ListItemContent icon='music_note'>ClearKey</ListItemContent>
								</ListItem>
								<ListItem>
									Sanitizers
								</ListItem>
								<ListItem onClick={() => { this.setState({page: Home()})}}>
									<ListItemContent icon='image'>OSEF</ListItemContent>
								</ListItem>
							</List>
						</nav>
						{this.state.page}
					</div>
				</div>
			</Page>
		);
	}
}

export default PluginsBlock;
