import Character from '../character';

describe('Character', () => {
  test('creating a new character with default values', () => {
    const character = new Character('Test', 'Bowman');
    expect(character.name).toBe('Test');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  test('increase the level by 1 and adjust the attack, defense by 20% when you level up', () => {
    const character = new Character('Test', 'Bowman');
    character.levelUp();
    expect(character.level).toBe(2);
    const expectedAttack = Math.floor(25 * 1.2); 
    const expectedDefence = Math.floor(25 * 1.2);
    expect(character.attack).toBe(expectedAttack);
    expect(character.defence).toBe(expectedDefence);
    expect(character.health).toBe(100);
  });

  test('reduce health by the calculated value when taking damage', () => {
    const character = new Character('Test', 'Bowman');
    character.damage(20);
    const expectedHealth = 100 - Math.floor(20 * (1 - 25 / 100));
    expect(character.health).toBe(expectedHealth);
  });

  test('does not reduce health below zero', () => {
    const character = new Character('Test', 'Bowman');
    character.damage(200); 
    expect(character.health).toBe(0); 
  });

  test('if the name is less than 2 characters long, an error message appears', () => {
    expect(() => new Character('T', 'Bowman')).toThrow('Name should be a string with length between 2 and 10 characters');
  });

  test('if the length of the name exceeds 10 characters, an error message appears', () => {
    expect(() => new Character('TestNameTest', 'Bowman')).toThrow('Name should be a string with length between 2 and 10 characters');
  });

  test('if the type is invalid, an error message appears', () => {
    expect(() => new Character('Test', 'InvalidType')).toThrow('Invalid character type');
  });
  
  test('if the character is not known', () => {
    expect(() => new Character('Test', 'UnknownType')).toThrow('Invalid character type');
  });
  
  test('if the health is zero or equal', () => {
    const character = new Character('Test', 'Bowman');
    character.health = 0; 
    expect(() => character.levelUp()).toThrow('Cannot level up a dead character');
  });

  test('if the health is at zero when calling the damage method', () => {
    const character = new Character('Test', 'Bowman');
    character.health = 0; 
    expect(() => character.damage(20)).toThrow('Cannot damage a dead character');
  });

});
