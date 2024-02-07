import Magician from '../magician';

describe('Magician', () => {
  test('should create a new Magician with default values', () => {
    const character = new Magician('Test');
    expect(character.name).toBe('Test');
    expect(character.type).toBe('Magician');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(10);
    expect(character.defence).toBe(40);
  });
});
