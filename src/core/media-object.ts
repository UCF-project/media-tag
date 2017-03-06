

class MediaObject {
    private info = {extension: "", mimeType: ""};
    constructor(options: object) {
        // TODO: parse src into url parts (protocal, domain, extension, etc)

    }

    public getExtension(): string {
        return this.info.extension;
    }

    public getMimeType(): string {
        return this.info.mimeType;
    }

    public hasAttribute(attributeName: string): boolean {
        return attributeName in this.info;
    }
}

export default MediaObject;
