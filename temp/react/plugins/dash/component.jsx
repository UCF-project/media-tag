import React from 'react';

/**
 * @brief      Class for image.
 */
class DashComponent extends React.Component {
	/**
	 * @brief      Constructs the object.
	 *
	 * @param      props  The properties
	 */
	constructor(props) {
		super(props);

		this.state = {
			video: this.video()
		}

		this.initPlayer = this.initPlayer.bind(this, this.state.video);
	}

	video() {
		const { ckkey, ckid, ...rest } = this.props;

		return (
			<video {...rest}></video>
		);
	}

	componentDidMount() {
		this.initPlayer()
	}

	initPlayer() {
		const video = document.getElementById(this.props.id);
		const player = new shaka.Player(video);
		const id = this.props.ckid;
		const key = this.props.ckkey;

		if (id && key) {
			const clearKeyStringObject = '{"' + id + '": "' + key + '"}';
			const clearKey = JSON.parse(clearKeyStringObject);

			player.configure({
				drm: {
					clearKeys: clearKey
				}
			});
		}
		player.load(this.props.src).then();
	}
	/**
	 * @brief      { function_description }
	 *
	 * @return     { description_of_the_return_value }
	 */
	render() {
		return this.state.video;
	}
}

module.exports = DashComponent;
