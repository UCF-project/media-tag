/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import List, {ListItem} from 'material-ui/List';

import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Home from 'material-ui/svg-icons/action/home';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Divider from 'material-ui/Divider';
import { Tabs, Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

import { Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const muiTheme = getMuiTheme({
	palette: {
		accent1Color: deepOrange500
	}
});

class PageFactory {
	static Plugin(title, subtitle, description, html, code, view) {
		return (
			<Paper className={'flex fit-height paper column'} >
				<h1>{title}</h1>
				<h2>{subtitle}</h2>
				<p>
					{description}
				</p>
				<div className='flex fit-height'>
					<Tabs className={'flex split column right-padded'}>
						<Tab label="Html">
							{html}
						</Tab>
						<Tab label="Code">
							{code}
						</Tab>
					</Tabs>
					<Paper className={'flex split'}>
						{view}
					</Paper>
				</div>
			</Paper>
		);
	}

	static Html(text) {
		return (
			<Paper>
				<xmp style={{
					margin: 0,
					padding: 0}}>
					{text}
				</xmp>
			</Paper>
			
		);
	}

	static Code(text) {
		return (
			<Paper>
				<pre>
					{text}
				</pre>
			</Paper>
			
		);
	}

	static View() {
		return (
			<media-tag
				class="flex fit v-aligned h-aligned show"
				data-attr-class="fit"
				src="/assets/images/media-tag-logo-text.png"
				data-type="image/png">
			</media-tag>
		);
	}
}

const pages = {
	home: () => {
		return (<Paper className={'flex fit paper column'} >
			<h1>Home</h1>
		</Paper>);
	},
	installation: () => {
		return (<Paper className={'flex fit paper column'} >
			<h1>Installation</h1>
		</Paper>);
	},
	configuration: () => {
		return (<Paper className={'flex fit paper column'} >
			<h1>Configuration</h1>
		</Paper>);
	},
	plugins: () => {
		return (<Paper className={'flex fit paper'} >
			<div className={'flex column plugins-menu scrollable'}>
				<h1>Plugins</h1>
				<h2><em>Analyse</em></h2>
				<h3>Matchers</h3>
				<div>
					<List>
						<Divider />
						<ListItem primaryText="Crypto" leftIcon={<Home />} />
						<ListItem primaryText="ClearKey" leftIcon={<Home />} />
					</List>
				</div>
				<h2><em>Active</em></h2>
				<h3>Renderers</h3>
				<List>
					<Divider />
					<ListItem primaryText="Image" leftIcon={<Home />} />
					<ListItem primaryText="Audio" leftIcon={<Home />} />
					<ListItem primaryText="Video" leftIcon={<Home />} />
					<ListItem primaryText="Pdf" leftIcon={<Home />} />
					<ListItem primaryText="Dash" leftIcon={<Home />} />
				</List>
				<h3>Filters</h3>
				<List>
					<Divider />
					<ListItem primaryText="Crypto" leftIcon={<Home />} />
					<ListItem primaryText="ClearKey" leftIcon={<Home />} />
				</List>
				<h3>Sanitizers</h3>
				<List>
					<Divider />
					<ListItem primaryText="Crypto" leftIcon={<Home />} />
					<ListItem primaryText="ClearKey" leftIcon={<Home />} />
				</List>
			</div>
			<div className={'flex plugins-displayer column show'}>
				{plugins.image}
			</div>
		</Paper>);
	}
}

const views = {
	image: () => {
		return (
			<media-tag
				class="flex fit v-aligned h-aligned show"
				data-attr-class="fit"
				src="/assets/images/media-tag-logo-text.png"
				data-type="image/png">
			</media-tag>
		);
	},
	audio: () => {
		return (
			<media-tag
				class="flex fit v-aligned h-aligned show"
				src="/assets/audios/alterway.mp3"
				data-type="audio/mp3">
			</media-tag>
		);
	},
	video: () => {
		return (
			<media-tag
				class="flex fit v-aligned h-aligned show"
				data-attr-class="fit-width padded"
				src="/assets/videos/bbb.mp4"
				data-type="video/mp4">
			</media-tag>
		);
	},
	pdf: () => {
		return (
			<media-tag
				class="fit v-aligned h-aligned show"
				data-attr-class="fit-height"
				src="/assets/documents/kasukasu-manuel-utilisateur.pdf"
				data-type="application/pdf">
			</media-tag>
		);
	},
	dash: () => {
		return (
			<media-tag
				class="flex fit v-aligned h-aligned show"
				data-attr-class="fit-width padded"
				src="/assets/videos/bbb_dash.mpd"
				data-type="application/dash+xml">
			</media-tag>
		);
	}
}

const plugins = {
	image: PageFactory.Plugin(
		'Plugin',
		'Image',
		'Image plugin is a render plugin specialised in image treatement',
		PageFactory.Html('<media-tag>'),
		PageFactory.Code('class Penguin {}'),
		views.image()),
	audio: PageFactory.Plugin(
		'Plugin',
		'Audio',
		'Audio plugin is a render plugin specialised in audio treatement',
		PageFactory.Html('<media-tag>'),
		PageFactory.Code('class Penguin {}'),
		views.image()),
	video: PageFactory.Plugin(
		'Plugin',
		'Video',
		'Video plugin is a render plugin specialised in video treatement',
		PageFactory.Html('<media-tag>'),
		PageFactory.Code('class Penguin {}'),
		views.image()),
	pdf: PageFactory.Plugin(
		'Plugin',
		'Pdf',
		'Pdf plugin is a render plugin specialised in pdf treatement',
		PageFactory.Html('<media-tag>'),
		PageFactory.Code('class Penguin {}'),
		views.image()),
	dash: PageFactory.Plugin(
		'Plugin',
		'Dash',
		'Dash plugin is a render plugin specialised in dash treatement',
		PageFactory.Html('<media-tag>'),
		PageFactory.Code('class Penguin {}'),
		views.image())
};

/**
 * Class for main.
 *
 * @class      Main (name)
 */
class Main extends Component {
	/**
	 * Constructs the object.
	 *
	 * @param      {<type>}  props    The properties
	 * @param      {<type>}  context  The context
	 */
	constructor(props, context) {
		super(props, context);

		this.state = {
			activePage: 'home'
		};

		this.setPage = this.setPage.bind(this);
	}

	/**
	 * Sets the page.
	 *
	 * @param      {<type>}  page    The page
	 */
	setPage(page) {
		this.setState({activePage: page});
	}

	/**
	 * { function_description }
	 *
	 * @return     {<type>}  { description_of_the_return_value }
	 */
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div className={'flex fit'}>
					<Paper className={'nav column h-aligned'}>
						<img
							className={'flex fit-width'}
							type='image/png'
							src='/assets/images/media-tag-logo-text.png' />
						<List>
							<ListItem primaryText="Home" leftIcon={<Home />} onClick={() => {this.setPage('home')}}/>
							<ListItem primaryText="Installation" leftIcon={<ContentInbox />} onClick={() => {this.setPage('installation')}}/>
							<ListItem primaryText="Configuration" leftIcon={<ActionGrade />} onClick={() => {this.setPage('configuration')}}/>
							<ListItem primaryText="Plugins" leftIcon={<ContentSend />} onClick={() => {this.setPage('plugins')}}/>
						</List>
					</Paper>
					<div className={'page-container background-grey'}>
						{pages[this.state.activePage]()}
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Main;
