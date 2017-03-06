import MediaObject from "../core/media-object";

/**
 * Plugins should implement this interface.
 */
interface IPlugin {
    typeCheck: (mediaObj: MediaObject) => boolean;
    template?: string;
    identifier: string;
}

export default IPlugin;
