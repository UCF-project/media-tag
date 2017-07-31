/* global document */
const Store = require('../stores/store');
const Configuration = require('./configuration');

class Loader {
	/**
	 * Constructs the object.
	 */
	constructor() {
		/**
		 * To store to manage loaded url like a kind of cache.
		 */
		this.store = new Store();

		/**
		 * To store promises and bring back a unique url to avoid multiple same loading.
		 */
		this.promiseStore = new Store();
	}

	isStored(url) {
		return this.store.isStore(url);
	}

	/**
	 * Loads script only one time.
	 *
	 * @param      {string}   url     The url
	 * @return     {Promise}
	 */
	script(url) {
		if (!this.promiseStore.isStored(url)) {
			this.promiseStore.store(url, new Promise((resolve, reject) => {
				const script = document.createElement('script');

				script.type = 'text/javascript';
				script.src = url;
				script.onload = resolve;
				script.onerror = reject;
				script.abort = reject;
				document.head.appendChild(script);
			}));
		}
		return this.promiseStore.get(url);
	}

	/**
	 * Loads a configuration only one time.
	 *
	 * @param      {<type>}   url     The url
	 * @return     {Promise}  { description_of_the_return_value }
	 */
	configuration(url) {
		if (!this.store.isStored(url)) {
			return new Promise((resolve, reject) => {
				const script = document.createElement('script');

				script.src = url;
				script.type = 'text/javascript';

				document.addEventListener('Configuration', event => {
					const configuration = event.configuration;

					if (this.store.isStored(url)) {
						configuration.origin = 'store';
					} else {
						this.store.store(url, event.configuration);
						configuration.origin = url;
					}
					resolve(new Configuration(configuration));
				});
				script.onerror = err => {
					reject(err);
				};
				document.head.appendChild(script);
			});
		}
		return new Promise(resolve => {
			resolve(new Configuration(this.store.get(url)));
		});
	}

	algorithm(url) {
		if (!this.promiseStore.isStored(url)) {
			this.promiseStore.store(url, new Promise((resolve, reject) => {
				const script = document.createElement('script');

				script.src = url;
				script.type = 'text/javascript';
				document.addEventListener('Algorithm', event => {
					if (!this.store.isStored(url)) {
						this.store.store(url, event.algorithm);
					}
					resolve(this.store.get(url));
				});
				script.onerror = err => {
					reject(err);
				};
				document.head.appendChild(script);
			}));
		}
		return this.promiseStore.get(url);
	}
}

module.exports = Loader;
