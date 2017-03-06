import MediaObject from "../core/media-object";
import Plugin from "../core/plugin";

const CryptoPlugin: Plugin = {
    identifier: "crypto",
    typeCheck: (mediaObj: MediaObject) => {
        return mediaObj.hasAttribute("data-crypto-key");
    },
};

export default CryptoPlugin;
