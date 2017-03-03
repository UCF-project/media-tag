
class MediaObject {
    constructor() {

    }

    getExtension(): string {
        return 'png';
    }

    getMimeType(): string {
        return 'image/png';
    }

    hasAttribute(attributeName: string): boolean {
        return true;
    }
}

export default MediaObject;
