import Swordsman from '../swordsman';

describe('Swordsman', () => {
  test('should create a new Swordsman with default values', () => {
    const character = new Swordsman('Test');
    expect(character.name).toBe('Test');
    expect(character.type).toBe('Swordsman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(40);
    expect(character.defence).toBe(10);
  });
});
