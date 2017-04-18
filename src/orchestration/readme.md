# Orchestration

Current plugins are defined like this :

```
	/* global document */

	/**
	 * @module ImagePlugin
	 * @since 0.2.0
	 */
	const ImagePlugin = {
		identifier: 'image',
		typeCheck: mediaObject => {
			const regexExtensions = new RegExp('^png|jpg|jpeg|gif$');
			const regexMimes = new RegExp('^image/(png|svg+xml|jpeg|gif)$');

			return	mediaObject.hasAttribute('src') &&
					mediaObject.getType() === 'image' &&
					regexExtensions.exec(mediaObject.getExtension()) !== null &&
					regexMimes.exec(mediaObject.getMimeType()) !== null;
		},
		startup: mediaObject => {
	        // Create image element
			const element = document.createElement('img');

	        // Set the source file
			element.setAttribute('src', mediaObject.getAttribute('src'));

	        // Set all data-attr-something to the element.setAttribute('something', value)
			mediaObject.utilsSetAllDataAttributes(element);

	        // Update mediaObject contents with the created element
			mediaObject.replaceContents([element]);
		}
	};

	module.exports = ImagePlugin;
```

Plugins are divided internalinto two parts :
	* The first to check if the mediaObject fits with some criterions.
	* The second to apply some modifications over the mediaObject so the DOM.

The goal of this part is to propose an experimental feature which permits to extract
the mediaObject analyse. With this extraction can impoverish the role of the engine to
a simple FIFO module executor.

The job analyse is confided to an orchestrator which can produce output to enable
the selection of only required modules according to AMD concept.

Logics are rules that the orchestrator must follow to find a particular module.
Some logics are given to the orchestrator which is able to work and make modules choices.
Theses logics are added to guidelines which is used by the orchestrator, it can't handle isolated
logics, all logics must be registered into guidelines.

Guidelines works as a static definition to define orchestrator capabilities.
Guidelines must be defined before MediaTag usage otherwise orchestrator couldn't
recognise modules and couldn't load anything.

Guidelines definition is pretty the same as other managers :

```
	/**
	 * Class for guidelines.
	 * Guidelines contains part of logic usefull for the orchestrator.
	 * The orchestrator can work with theses logics and outputs
	 * the best pattern for a mediaObject processing.
	 *
	 * @class      Guidelines (name)
	 */
	class Guidelines {
		/**
		 * Determines if registered.
		 *
		 * @param      {}   logic   The logic
		 * @return     {boolean}  True if registered, False otherwise.
		 */
		static isRegistered(logic) {
			return true && Guidelines.logics[logic.identifier];
		}

		static registerLogic(logic) {
			if (Guidelines.isRegistered(logic)) {
				console.warn(`The logic "{$logic.identifier}" is already registered`);
			} else {
				Guidelines.logics[logic.identifier] = logic;
			}
		}

		static registerLogics(logics) {
			for (const key of Object.keys(logics)) {
				Guidelines.registerLogic(logics[key]);
			}
		}
	}

	Guidelines.logics = {};

	module.exports = Guidelines;
```

Guidelines static load : 

```
	/**
	 * Object with logics to register.
	 *
	 * @type       {Object}
	 */

	const logics = {
		FilterDefaultLogic: require('./logics/filters/default'),
		FilterCryptoLogic: require('./logics/filters/crypto'),
		FilterClearKeyLogic: require('./logics/filters/clear-key'),

		PluginImageLogic: require('./logics/plugins/image'),
		PluginAudioLogic: require('./logics/plugins/audio'),
		PluginVideoLogic: require('./logics/plugins/video'),
		PluginPdfLogic: require('./logics/plugins/pdf'),
		PluginDashLogic: require('./logics/plugins/dash')
	};

	/**
	 * Register logics by their identifiers
	 */

	Guidelines.registerLogics(logics);
```

Guildelines dynamic load :

Possible but currently no working example to illustrate.


This feature has no sens into webpack context because each 'require' occurency imports
module content though it no always used.
