import { loadUser } from '../user';
import { httpGet } from '../http';
import { saveUser } from '../user';

jest.mock('../http');

beforeEach(() => {
  jest.clearAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});

test('should throw an error if data cannot be parsed', () => {
  httpGet.mockReturnValue('invalid json');

  expect(() => { loadUser(1); }).toThrow();
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});

test('should throw an error when calling saveUser', () => {
  expect(() => { saveUser({}); }).toThrow('Unimplemented');
});
