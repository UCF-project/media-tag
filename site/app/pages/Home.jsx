import React from 'react';
import Page from '../containers/Page.jsx';
import {Component as MediaTag} from '../../www/assets/dist/media-tag-react.js';
import PluginBlock from '../containers/blocks/plugins/plugin/PluginBlock.jsx';

export default (
	<Page class='flex fit-width page column background-grey scrollable'>
		<div className={'page'}>
			<div className={'flex'}>
				<MediaTag
					class={'flex fit-width v-aligned'}
					src={'./assets/data/images/media-tag-logo-text.png'}
					data-type={'image/png'}
					data-attr-width={'30%'}
					data-attr-height={'100%'}
					/>
			</div>
			<div className={'flex page column h-aligned'}>
				<a
					style={{
						'min-width': '25%',
						background: 'rgb(172, 172, 255)',
						paddingTop: '1%',
						paddingBottom: '1%',
						color: 'rgb(255, 255, 255)',
						borderRadius: '10px',
						textDecoration: 'none',
						'text-align': 'center'
					}}
					href='https://github.com/UCF-project/media-tag'
					>View on GitHub</a>
			</div>

			<div className={'flex v-aligned h-aligned'}>
				<div className={'flex ghbtns-container'}>
					<div className={'flex split v-aligned h-aligned show'}>
						<iframe src="https://ghbtns.com/github-btn.html?user=UCF-project&repo=media-tag&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
					</div>
					<div className={'flex split v-aligned h-aligned show'}>
						<iframe src="https://ghbtns.com/github-btn.html?user=UCF-project&repo=media-tag&type=fork&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
					</div>
				</div>
			</div>
		</div>
		<div>
			<h3>Open source</h3>
			<p>
				Media-Tag is an open source project related in Ubiquitous Content Framework developped by alter way's R&D team.<br />
				Based on common web technologies like HTML5 and JavaScript, it goal is provide an unified interface about rich content presentation.<br />
			</p>
			<h3>Easy</h3>
			<p>
				Media-Tag use is really easy, you just have to add the library to your webpage and starts to use the tag.
			</p>
			<pre className='code-block'>
{`
Somewhere in your html page ...

<media-tag
	class="flex fit v-aligned h-aligned"	# Defines the media-tag container css classes
	data-attr-class="flex split"		# Defines content/render css classes
	data-attr-autoplay			# Sets up video autoplay
	src="./assets/data/videos/bbb.mp4"		# Sets a content source
	data-type="video/mp4">			# Sets the content type
</media-tag>

`}
			</pre>
			<MediaTag
		          class="flex fit v-aligned h-aligned"
		          data-attr-className="flex split"
		          data-attr-autoPlay
		          src="./assets/data/videos/bbb.mp4"
		          data-type="video/mp4" />

			<h3>Modular</h3>
			<p>
				Media-Tag is able to render medias like, images, audios, videos, dash and pdf.<br />
				Each of theses features take form from a set of plugin registered to Media-Tag stores.<br />
				You can enrich the current version of Media-Tag with new features.<br />
				Media-Tag provides you various maner to add your own awesome plugins.<br />
			</p>
			<h3>Complex</h3>
			<p>
				Media-Tag provides several plugin types able have complex behaviours.<br />
				For example, Media-Tag contains features like crypto filter able to decrypt a Media-Tag content before it rendering.<br />
			</p>
			<h3>Efficient</h3>
			<p>
				Media-Tag can process automatically your new tags in dynamical execution context.<br />
				For example, you can use Media-Tag to allows chat users to display images, musics, videos ... directly in the chat.<br />
				Each static tag is processed only one time.<br />
				If some attributes change then the Media-Tag will be reprocessed automatically too.<br />
			</p>
			<p>
				If some developped plugins are incompatibles or their rules entre in conflict Media-Tag's engines are
				able to detect that kind of errors. <br />

			</p>
		</div>
	</Page>
);
