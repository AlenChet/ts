export default class ArrayBufferConverter {
    constructor() {
        this.buffer = null;
    }

    load(buffer) {
        this.buffer = buffer;
    }

    toString() {
        if (!this.buffer) {
            throw new Error('ArrayBuffer is not loaded');
        }
    
        const bufferView = new Uint8Array(this.buffer);
        const decoder = new TextDecoder('utf-8');
        return decoder.decode(bufferView).replace(/\0/g, '');
    }
    
}