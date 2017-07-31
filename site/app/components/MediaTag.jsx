import React from 'react';

class MediaTag extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<media-tag {...this.props}>
			</media-tag>
		);
	}
}

export default MediaTag;
