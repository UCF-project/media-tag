import Plugin from "../core/plugin";

const Errors = {
    PluginExists: class PluginExists extends Error {
        constructor(objPlugin: Plugin) {
            super(`Plugin with same "${objPlugin.identifier}" identifier found.`);
        }
    },
};

export default Errors;
