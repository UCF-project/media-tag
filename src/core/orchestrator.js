const Guidelines = require('../orchestration/guidelines');
const FilterManager = require('./filter-manager');
const PluginManager = require('./plugin-manager');

/**
 * Handles mediaObject processing by selecting modules to apply and
 * checking for processing coherence. It providing identifiers extracted
 * from some logics to enable dynamic loading using a static paths map.
 *
 * @class      Orchestrator (name)
 */

class Orchestrator {
	/**
	 * Finds all required modules for an instance of mediaObject.
	 *
	 * @param      {Object}  mediaObject  The media object
	 */
	static findRequiredModuleIdentifiers(mediaObject) {
		return Guidelines.logics().filter(logic => {
			return logic.apply(mediaObject) && !Orchestrator.forbiddenIdentifiers.includes(logic.identifier);
		}).map(logic => {
			return logic.identifier;
		});
	}

	static findFilterIdentifiersToRegister(mediaObject) {
		return Guidelines.logics().filter(logic => {
			return logic.apply(mediaObject) && !Orchestrator.forbiddenIdentifiers.includes(logic.identifier);
		}).filter(logic => {
			return logic.type === 'filter';
		}).map(logic => {
			return logic.identifier;
		});
	}

	static findPluginIdentifiersToRegister(mediaObject) {
		return Guidelines.logics().filter(logic => {
			return logic.apply(mediaObject) && !Orchestrator.forbiddenIdentifiers.includes(logic.identifier);
		}).filter(logic => {
			return logic.type === 'plugin';
		}).map(logic => {
			return logic.identifier;
		});
	}

	/**
	 * Searches for a collision between some plugins in a chain.
	 * The presence of most of one plugin in a chain is
	 * consided as a collision. A collision significate that
	 * is impossible to determine which plugin have to be applied.
	 *
	 * @param      {Array}  chain   The chain
	 * @return     {Object}  A collision object, otherwise null
	 */
	static searchLogicCollision(chain) {
		const collidingModules = chain.filter(module => {
			return PluginManager.plugins().find(plugin => {
				return module.identifier === plugin.identifier;
			});
		});

		if (collidingModules.length > 1) {
			return {
				modules: collidingModules
			};
		}
		return null;
	}

	/**
	 * Finds a chain of modules to apply on mediaObject.
	 * Filters in first and plugin then.
	 * (Must have only one ending plugin in a chain)
	 *
	 * @param      {Object}  mediaObject  The media object
	 * @return     {Array}  Array of modules
	 */
	static findModuleChain(mediaObject) {
		const identifiers = Orchestrator.findRequiredModuleIdentifiers(mediaObject);
		const chain = identifiers.map(identifier => {
			const module = FilterManager.getFilter(identifier) || PluginManager.getPlugin(identifier);

			if (module) {
				return module;
			}
			throw new Error(`Module ${identifier} not found`);
		});

		const collision = Orchestrator.searchLogicCollision(chain);
		if (collision) {
			const identifiers = collision.modules.map(module => {
				return module.identifier;
			});
			throw new Error(`Has collision between [${identifiers}]'s logics`);
		}

		return chain;
	}

	/**
	 * Starts the mediaObject processing.
	 *
	 * @param      {<type>}  mediaObject  The media object
	 */
	static startup(mediaObject) {
		/**
		 * Checks if some logics are in the Orchestrator.
		 * The startup aborts if has no logics to work with.
		 */
		if (Guidelines.hasLogics() === false) {
			console.warn('Guidelines havn\'t logics ... The orchestrator cannot do anything !');
			return;
		}

		const id = mediaObject.getId();
		/**
		 * Register a chain with the initial mediaObject.
		 */
		Orchestrator.chains[id] = Orchestrator.findModuleChain(mediaObject);

		/**
		 * Create the first history state.
		 */
		Orchestrator.history[id] = {
			identifiers: [
				Orchestrator.findRequiredModuleIdentifiers(mediaObject)
			],
			cycles: {}
		};

		/**
		 * Run the first module on mediaObject if exists and has modules to run.
		 */
		if (Orchestrator.chains[id].length > 0) {
			Orchestrator.run(mediaObject);
		}
	}

	/**
	 * Verifies the coherence of a chain.
	 *
	 * @param      {<type>}  mediaObject  The media object
	 */
	static coherence(mediaObject) {
		const id = mediaObject.getId();
		const index = Orchestrator.history[id].identifiers.length - 1;

		/**
		 * Throw a error if a module have been called more times than allowed times.
		 */
		if (Object.keys(Orchestrator.history[id].cycles).some(identifier => {
			return Orchestrator.history[id].cycles[identifier] > Orchestrator.allowedCycles;
		})) {
			console.log(Orchestrator.history[id]);
			throw new Error(`Maximum cycles exceed ${Orchestrator.history[id].cycles}`);
		}

		/**
		 * Are same if identifiers history has two times the same state or the same module will call
		 * following twice.
		 *
		 * @type       {boolean}
		 */
		const areSame = Orchestrator.history[id].identifiers[index - 1].every(identifier => {
			return Orchestrator.history[id].identifiers[index].includes(identifier);
		}) || Orchestrator.history[id].identifiers[index - 1][0] === Orchestrator.history[id].identifiers[index][0];

		const identifier = Orchestrator.history[id].identifiers[index][0];

		if (areSame) {
			console.info(
			'Chain has not evolved since the last module execution, the module "%s" is skipped',
			identifier);
			Orchestrator.chains[id].shift();
		}
	}

	/**
	 * Applies a module a the mediaObject.
	 *
	 * @param      {<type>}  mediaObject  The media object
	 */
	static run(mediaObject) {
		const id = mediaObject.getId();

		/**
		 * Because a chain() can be called and no plugin to run can occur.
		 */
		if (Orchestrator.chains[id][0]) {
			Orchestrator.chains[id][0].startup(mediaObject);
		} else {
			console.warn('Attempts to run a empty chain ...', 'History : ', Orchestrator.history[id]);
		}
	}

	/**
	 * Runs the next module of the chain after updating and verifying the orchestrator.
	 *
	 * @param      {<type>}  mediaObject  The media object
	 */
	static chain(mediaObject) {
		Orchestrator.update(mediaObject);
		Orchestrator.coherence(mediaObject);
		Orchestrator.run(mediaObject);
	}

	/**
	 * Updates the orchestrator for a mediaObject.
	 *
	 * @param      {<type>}  mediaObject  The media object
	 */
	static update(mediaObject) {
		const id = mediaObject.getId();
		const usedModule = Orchestrator.chains[id].shift();

		/**
	 	 * Update the chain by pushing filters not referenced at begin of the chain.
	 	 */
		const revelantModules = Orchestrator.findModuleChain(mediaObject).filter(module => {
			return !Orchestrator.chains[id].includes(module);
		});

		revelantModules.forEach(module => {
			Orchestrator.chains[id].unshift(module);
		});

		/**
		 * Update cycle count of the last used module.
		 */
		const cycleCount = Orchestrator.history[id].cycles[usedModule.identifier];

		Orchestrator.history[id].cycles[usedModule.identifier] = (typeof cycleCount === 'number') ? (cycleCount + 1) : 1;

		/**
		 * Update the identifiers list with the current chain.
		 */
		const identifiers = Orchestrator.chains[id].map(module => {
			return module.identifier;
		});

		Orchestrator.history[id].identifiers.push(identifiers);
	}
}

/**
 * Chains of the orchestrator.
 */
Orchestrator.chains = {};

/**
 * History of the orchestrator.
 */
Orchestrator.history = {};

/**
 * Maximum allowed cycles for a module excution.
 */
Orchestrator.allowedCycles = 1;

/**
 * Forbiddens modules identifiers.
 */
Orchestrator.forbiddenIdentifiers = [];

/**
 * Prints the history.
 */
Orchestrator.printHistory = () => {
	let result = String();
	Object.keys(Orchestrator.history).forEach(key => {
		const history = Orchestrator.history[key];

		result += 'Cycle[' + key + ']: \n';
		Object.keys(history.cycles).forEach(identifier => {
			result += identifier + ': ' + history.cycles[identifier] + '\n';
		});
		result += 'Identifiers[' + key + ']: \n';
		history.identifiers.forEach(identifiers => {
			result += '[';
			identifiers.forEach(identifier => {
				result += identifier + ', ';
			});
			result += ']';
			result = result.replace(', ]', ']\n');
		});
	});
	console.log(result);
};

module.exports = Orchestrator;
