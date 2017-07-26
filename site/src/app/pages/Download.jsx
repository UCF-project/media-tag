import React from 'react';
import Page from '../containers/Page.jsx';
import MediaTag from '../components/MediaTag.jsx';
import PluginBlock from '../containers/blocks/plugins/plugin/PluginBlock.jsx';

export default (
	<Page class={'flex fit-width page column background-grey'}>
		<PluginBlock 
			htmlTitle={'Download'}
			htmlBody={
			<div className={'flex column fit'}>
				<h4>Description</h4>
				<p>
					Download plugin is able to provide a download button for several contents.<br />
					Type : <br />
				</p>
				<ul>
					<li>download (not a true type)</li>
				</ul>
				<h4>Usage</h4>
				<p>
					To render a download button, you should define a {'<media-tag>'} element. <br />
					This tag can contain severals attributes but have to contain at least a <b>src</b> and a <b>data-type</b>. <br />
					Other attributes are optional. <br />
				</p>
				<pre className={'no-padding no-margin'}>
{`  <media-tag
	class="flex fit v-aligned h-aligned"
	data-attr-class="flex fit-width"
	src="/assets/videos/bbb.mp4"
	data-type="download">
	</media-tag>

`}
				</pre>
				<h4>Warning</h4>
				<p>
					This plugin is also used as default render when no types are found. <br />
					For example, if a mistake occurs on dash rendering the download button risk to provide only the mpd file ... <br />
				</p>
			</div>
			}
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
	</Page>
);
