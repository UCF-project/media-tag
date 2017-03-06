import Errors from "./errors";
import MediaOject from "./media-object";
import Plugin from "./plugin";

interface IObjsPlugin {
    [pluginName: string]: Plugin;
}

/**
 * @class MediaTag
 * Media Tag Core
 * @example
 * var mediaTagObj = MediaTag(document.querySelector('.myMediaTag'));
 */
class MediaTag {
    /**
     * Register a new plugin.
     *
     * @param {Plugin} plugin
     */
    public static registerPlugin(plugin: Plugin) {
        if (plugin.identifier in MediaTag.plugins) {
            throw new Errors.PluginExists(plugin);
        }

        MediaTag.plugins[plugin.identifier] = plugin;
    }

    protected static plugins: IObjsPlugin = {};

    private rootElement: HTMLElement;
    private mediaObject: MediaOject;
    /**
     * This is the Media Tag constructor
     */
    constructor(node: HTMLElement) {
        // TODO: parameter being an array of node elements
        // For example the result of document.querySelectorAll('div')
        this.rootElement = node;
        this.mediaObject = new MediaOject(Object.assign({}, node.dataset));
    }
};

export default MediaTag;
