import Zombie from '../zombie';

describe('Zombie', () => {
  test('should create a new Zombie with default values', () => {
    const character = new Zombie('Test');
    expect(character.name).toBe('Test');
    expect(character.type).toBe('Zombie');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(40);
    expect(character.defence).toBe(10);
  });
});
