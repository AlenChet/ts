import Bowerman from '../bowerman';

describe('Bowerman', () => {
  test('should create a new Bowerman with default values', () => {
    const character = new Bowerman('Test');
    expect(character.name).toBe('Test');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });
});

