import MediaTag from './media-tag.jsx';

/* global document */

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<div>
			<MediaTag
				src="/assets/images/image.svg"
				data-type="image/svg+xml"
				configuration="configuration.js"/>
			<MediaTag
				src="/assets/audios/alterway.mp3"
				data-type="audio/mp3" />
			<MediaTag
				src="/assets/videos/bbb.mp4"
				data-type="video/mp4" />
			<MediaTag
				src="/assets/documents/kasukasu-manuel-utilisateur.pdf"
				data-type="application/pdf" />
			<MediaTag
				src="/assets/videos/bbb_dash.mpd"
				data-type="application/dash+xml"
				data-attr-controls />
			<MediaTag
				src="/assets/images/image.svg"
				data-type="download" />
		</div>, document.body);
});
