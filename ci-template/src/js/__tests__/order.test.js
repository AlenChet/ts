import orderByProps from '../order';
import { extractSpecialAttacks } from '../order';

describe('orderByProps function', () => {
  test('should return an array of sorted properties with values', () => {
    const character = {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const result = orderByProps(character, ['name', 'level']);
    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 }]);
  });

  test('should return an array of sorted properties with values if additional props are provided', () => {
    const character = {
      name: 'Jane', lastName: 'Doe', age: 25, sex: 'female', occupation: 'finance',
    };
    const result = orderByProps(character, ['occupation', 'lastName', 'age']);
    expect(result).toEqual([
      { key: 'lastName', value: 'Doe' },
      { key: 'age', value: 25 },
      { key: 'occupation', value: 'finance' },
      { key: 'name', value: 'Jane' },
      { key: 'sex', value: 'female' }]);
  });

  test('should return an array of sorted properties with values if no props are provided', () => {
    const character = {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const result = orderByProps(character, []);
    expect(result).toEqual([
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' }]);
  });
});


describe('extractSpecialAttacks', () => {
  test('извлекает специальные атаки из объекта и добавляет default значение для отсутствующего описания', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        }, 
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
        },
      ],
    };

    const expected = [
      {
        id: 8,
        name: 'Двойной выстрел',
        description: 'Двойной выстрел наносит двойной урон',
        icon: 'http://...',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        description: 'Описание недоступно',
        icon: 'http://...',
      },
    ];

    expect(extractSpecialAttacks(character)).toEqual(expected);
  });
});
