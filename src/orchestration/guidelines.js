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
		return true && Guidelines.logicsMap[logic.identifier];
	}

	static registerLogic(logic) {
		if (Guidelines.isRegistered(logic)) {
			console.warn(`The logic "{$logic.identifier}" is already registered`);
		} else {
			Guidelines.logicsMap[logic.identifier] = logic;
		}
	}

	static registerLogics(logics) {
		for (const key of Object.keys(logics)) {
			Guidelines.registerLogic(logics[key]);
		}
	}

	static logics() {
		return Object.keys(Guidelines.logicsMap).map(identifier => {
			return Guidelines.logicsMap[identifier];
		});
	}

	static hasLogics() {
		return Object.keys(Guidelines.logicsMap).length > 0;
	}
}

Guidelines.logicsMap = {};

module.exports = Guidelines;
