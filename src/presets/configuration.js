module.exports = {
	plugins: {
		image: {
			matcher: {
				types: [
					'image/png',
					'image/jpg',
					'image/jpeg',
					'image/gif',
					'image/svg'
				],
				process: mediaObject => {
					return true && mediaObject;
				}
			},
			renderer: {
				process: mediaObject => {
					// MAYBE A GOOD IDEA
					// BIND TO MEDIAOBJECT THE CONFIGURATION AND THE PROCESSING ENGINE
					// TO DO A RETURN AND A PLUGIN ADAPTATION THROUGH MEDIA OBJECT
					// mediaObject.return() {
					// 	this.processingEngine.return(this);
					// }
					const configuration = mediaObject.configuration;
					const processingEngine = mediaObject.processingEngine;
					mediaObject.return();
				}
			}
		}
	}
};
