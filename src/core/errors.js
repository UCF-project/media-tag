
const Errors = {
	PluginExists: class PluginExists extends Error {
		constructor(objPlugin) {
			super(`Plugin with same "${objPlugin.identifier}" identifier found.`);
		}
    },
	TypeNotFound: class TypeNotFound extends Error {
		constructor(mediaObject) {
			super(`Media Tag could not find the content type of an instance. Please check element ${mediaObject.getRootElement()}.`);
		}
    }
};

export default Errors;
