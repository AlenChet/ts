import ArrayBufferConverter from '../basic';

test('ArrayBufferConverter test', () => {
    const converter = new ArrayBufferConverter();
    const buffer = new ArrayBuffer(16);
    converter.load(buffer);
    expect(converter.toString()).toEqual('');

    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    const dataBuffer = new TextEncoder().encode(data).buffer;
    converter.load(dataBuffer);
    expect(converter.toString()).toEqual(data);
});

test('ArrayBufferConverter test without loading', () => {
    const converter = new ArrayBufferConverter();
    expect(() => converter.toString()).toThrow('ArrayBuffer is not loaded');
});