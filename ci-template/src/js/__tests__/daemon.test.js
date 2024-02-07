import Daemon from '../daemon';

describe('Daemon', () => {
  test('should create a new Daemon with default values', () => {
    const character = new Daemon('Test');
    expect(character.name).toBe('Test');
    expect(character.type).toBe('Daemon');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(10);
    expect(character.defence).toBe(40);
  });
});
