import MediaTag from './media-tag.jsx';

/* global document */

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<div>
			<MediaTag
				src="/assets/data/images/image.svg"
				data-type="image/svg+xml"
				data-attr-width="100%"
				configuration="configuration.js"/>
			<MediaTag
				src="/assets/data/audios/alterway.mp3"
				data-type="audio/mp3"
				data-attr-width="100%" />
			<MediaTag
				src="/assets/data/videos/bbb.mp4"
				data-type="video/mp4"
				data-attr-width="100%" />
			<MediaTag
				src="/assets/data/documents/kasukasu-manuel-utilisateur.pdf"
				data-type="application/pdf"
				data-attr-width="100%"
				data-attr-height="940" />
			<MediaTag
				src="/assets/data/videos/bbb_dash.mpd"
				data-type="application/dash+xml"
				data-attr-controls
				data-attr-width="100%" />
			<MediaTag
				src="/assets/data/images/image.svg"
				data-type="download"
				data-attr-width="100%"/>
		</div>, document.body);
});
