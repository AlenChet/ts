import Character from '../class/character';
import Bowman from '../class/bowerman';
import Daemon from '../class/daemon';
import Magician from '../class/magician';
import Swordsman from '../class/swordsman';
import Undead from '../class/undead';
import Zombie from '../class/zombie';

test('Персонаж с неверным коротким именем', () => {
  expect(
      () => new Character('O', 'Bowman', 100, 100),
  ).toThrow('Invalid name length');
});

test('Персонаж с неверным длинным именем', () => {
  expect(
      () => new Character('LongLongLongName', 'Daemon', 100, 100),
  ).toThrow('Invalid name length');
});

test('Персонаж с недопустимым типом символов', () => {
  expect(
      () => new Character('Bowy', 'FakeBowman', 100, 100),
  ).toThrow('Invalid character type');
});

test('Наносим урон персонажу', () => {
  const testChar = new Character('Bowy', 'Bowman', 25, 25);
  testChar.damage(50);
  expect(testChar).toEqual({
      name: 'Bowy',
      type: 'Bowman',
      health: 62.5,
      level: 1,
      attack: 25,
      defence: 25,
  });
});

test('Отрицательное здоровье', () => {
  const testChar = new Character('Bowy', 'Bowman', 25, 25);
  testChar.health = 0;
  testChar.damage(50);
  expect(testChar.health).toEqual(0);
});

test('Следующий уровень', () => {
  const testChar = new Character('Bowy', 'Bowman', 25, 25);
  testChar.levelUp();
  expect(testChar).toEqual({
      name: 'Bowy',
      type: 'Bowman',
      health: 100,
      level: 2,
      attack: 30,
      defence: 30,
  });
});

test('Слудующий уровень с 0 здоровьем', () => {
  const testChar = new Character('Bowy', 'Bowman', 25, 25);
  testChar.health = 0;
  expect(() => testChar.levelUp()).toThrow(
      'You cannot raise the level with zero health',
  );
});

test('Новый Bowman', () => {
  const bowman = new Bowman('Bowy');
  expect(bowman).toEqual({
      name: 'Bowy',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
  });
});

test('Новый Daemon', () => {
  const daemon = new Daemon('Daemy');
  expect(daemon).toEqual({
      name: 'Daemy',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
  });
});

test('Новый Magician', () => {
  const magician = new Magician('Magy');
  expect(magician).toEqual({
      name: 'Magy',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
  });
});

test('Новый Swordsman', () => {
  const swordsman = new Swordsman('Swordy');
  expect(swordsman).toEqual({
      name: 'Swordy',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
  });
});

test('Новый Undead', () => {
  const undead = new Undead('Undy');
  expect(undead).toEqual({
      name: 'Undy',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
  });
});

test('Новый Zombie', () => {
  const zombie = new Zombie('Zomy');
  expect(zombie).toEqual({
      name: 'Zomy',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
  });
});