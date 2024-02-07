import Undead from '../undead';

describe('Undead', () => {
  test('should create a new Undead with default values', () => {
    const character = new Undead('Test');
    expect(character.name).toBe('Test');
    expect(character.type).toBe('Undead');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });
});
