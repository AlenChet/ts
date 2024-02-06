import { httpGet } from '../http';

describe('httpGet function', () => {
  test('should throw an error with the provided URL', () => {
    const url = 'https://example.com/api/data';
    expect(() => { httpGet(url); }).toThrow(url);
  });
});

import { httpPost } from '../http';

describe('httpPost function', () => {
  test('should throw an error with the provided URL', () => {
    const url = 'https://example.com/api/data';
    expect(() => { httpPost(url); }).toThrow(url);
  });
});
