import GameSavingLoader from '../basic';

test('saving the game', async () => {
  const result = await GameSavingLoader.load();
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  expect(result).toEqual(JSON.stringify(expected));
});

test('should throw an error if loading fails', async () => {
  jest.spyOn(require('../reader'), 'default').mockImplementation(() => {
    throw new Error('Failed to read');
  });
  await expect(GameSavingLoader.load()).rejects.toThrow('Failed to load game saving');
  jest.restoreAllMocks();
});
