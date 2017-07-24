import React from 'react';

import Page from '../../Page.jsx';
import MediaTag from '../../../components/MediaTag.jsx';
import PluginBlock from './plugin/PluginBlock.jsx';

import { List, ListItem, ListItemContent } from 'react-mdl';

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
				<PluginBlock 
					htmlTitle={'Image'}
					htmlBody={`
						Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
						Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
						Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.
						Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
					`}
					viewTitle={'View'}
					viewBody={(
						<MediaTag
							class="flex fit-height v-aligned h-aligned"
							data-attr-class="fit"
							src="/assets/images/media-tag-logo-text.png"
							data-type="image/png">
						</MediaTag>
					)}
				/>
			);
		}
		case 'audio': {
			return (
				<PluginBlock 
					htmlTitle={'Audio'}
					htmlBody={'Audio ...'}
					viewTitle={'View'}
					viewBody={(
						<MediaTag
							class="flex fit v-aligned h-aligned"
							src="/assets/audios/alterway.mp3"
							data-type="audio/mp3">
						</MediaTag>
					)}
				/>
			);
		}
		case 'video': {
			return (
				<PluginBlock 
					htmlTitle={'Video'}
					htmlBody={'Penguin ...'}
					viewTitle={'View'}
					viewBody={(
						<MediaTag
							class="flex fit v-aligned h-aligned"
							data-attr-class="flex fit-width"
							src="/assets/videos/bbb.mp4"
							data-type="video/mp4">
						</MediaTag>
					)}
				/>
			);
		}
		case 'pdf': {
			return (
				<PluginBlock 
					htmlTitle={'Pdf'}
					htmlBody={'Penguin ...'}
					viewTitle={'View'}
					viewBody={(
						<MediaTag
							class="flex fit v-aligned h-aligned"
							data-attr-class="flex fit-width"
							src="/assets/videos/bbb.mp4"
							data-type="video/mp4">
						</MediaTag>
					)}
				/>
			);
		}
		case 'dash': {
			return (
				<PluginBlock 
					htmlTitle={'Dash'}
					htmlBody={'Penguin ...'}
					viewTitle={'View'}
					viewBody={(
						<MediaTag
							class="flex fit v-aligned h-aligned"
							data-attr-class="flex fit-width"
							src="/assets/videos/bbb.mp4"
							data-type="video/mp4">
						</MediaTag>
					)}
				/>
			);
		}
		case 'download': {
			return (
				<PluginBlock 
					htmlTitle={'Download'}
					htmlBody={'Penguin ...'}
					viewTitle={'View'}
					viewBody={(
						<MediaTag
							class="flex fit v-aligned h-aligned"
							data-attr-class="flex fit-width h-aligned v-aligned"
							src="/assets/videos/bbb.mp4"
							data-type="download">
						</MediaTag>
					)}
				/>
			);
		}
		case 'crypto': {
			return (
				<PluginBlock 
					htmlTitle={'Crypto'}
					htmlBody={`
						Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
						Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
						Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.
						Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
					`}
					viewTitle={'View'}
					viewBody={(
						<MediaTag
							class="flex fit-height v-aligned h-aligned"
							data-attr-class="fit"
							src="/assets/images/media-tag-logo-text.png"
							data-type="image/png">
						</MediaTag>
					)}
				/>
			);
		}
		case 'clearkey': {
			return (
				<PluginBlock 
					htmlTitle={'ClearKey'}
					htmlBody={`
						Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
						Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
						Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.
						Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
					`}
					viewTitle={'View'}
					viewBody={(
						<MediaTag
							class="flex fit-height v-aligned h-aligned"
							data-attr-class="fit"
							src="/assets/images/media-tag-logo-text.png"
							data-type="image/png">
						</MediaTag>
					)}
				/>
			);
		}
		case 'sanitizer': {
			return (
				<PluginBlock 
					htmlTitle={'Sanitizer'}
					htmlBody={`
						Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
						Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
						Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.
						Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
					`}
					viewTitle={'View'}
					viewBody={(
						<MediaTag
							class="flex fit-height v-aligned h-aligned"
							data-attr-class="fit"
							src="/assets/images/media-tag-logo-text.png"
							data-type="image/png">
						</MediaTag>
					)}
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
								<ListItem 
									onClick={
										() => {  
											this.setState({page: subPage('image')})
										}
									}
								>
									<ListItemContent icon='image'>Image</ListItemContent>
								</ListItem>
								<ListItem 
									onClick={
										() => {  
											this.setState({page: subPage('audio')})
										}
									}
								>
									<ListItemContent icon='music_note'>Audio</ListItemContent>
								</ListItem>
								<ListItem 
									onClick={
										() => {  
											this.setState({page: subPage('video')})
										}
									}
								>
									<ListItemContent icon='movie'>Video</ListItemContent>
								</ListItem>
								<ListItem 
									onClick={
										() => {  
											this.setState({page: subPage('pdf')})
										}
									}
								>
									<ListItemContent icon='description'>Pdf</ListItemContent>
								</ListItem>
								<ListItem 
									onClick={
										() => {  
											this.setState({page: subPage('dash')})
										}
									}
								>
									<ListItemContent icon='video_label'>Dash</ListItemContent>
								</ListItem>
								<ListItem 
									onClick={
										() => {  
											this.setState({page: subPage('download')})
										}
									}
								>
									<ListItemContent icon='file_download'>Download</ListItemContent>
								</ListItem>
								<ListItem>
									Filters
								</ListItem>
								<ListItem 
									onClick={
										() => {  
											this.setState({page: subPage('crypto')})
										}
									}
								>
									<ListItemContent icon='build'>Crypto</ListItemContent>
								</ListItem>
								<ListItem 
									onClick={
										() => {  
											this.setState({page: subPage('clearkey')})
										}
									}
								>
									<ListItemContent icon='build'>ClearKey</ListItemContent>
								</ListItem>
								<ListItem>
									Sanitizers
								</ListItem>
								<ListItem 
									onClick={
										() => {  
											this.setState({page: subPage('sanitizer')})
										}
									}
								>
									<ListItemContent icon='healing'>Sanitizer</ListItemContent>
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
