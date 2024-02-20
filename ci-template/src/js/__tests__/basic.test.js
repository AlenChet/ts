import { Character, Team } from '../basic';

describe('Team class', () => {
    let team;

    beforeEach(() => {
        team = new Team();
    });

    test('Добавляем персонажа в команду', () => {
        const character = new Character('Alena');
        team.add(character);
        expect(team.toArray()).toContain(character);
    });

    test('Ошибка, если есть персонаж', () => {
        const character = new Character('Alena');
        team.add(character);
        expect(() => team.add(character)).toThrow();
    });

    test('Добавляем несколько персонажей', () => {
        const character1 = new Character('Alena');
        const character2 = new Character('Artem');
        team.addAll(character1, character2);
        expect(team.toArray()).toContain(character1);
        expect(team.toArray()).toContain(character2);
    });

    test('Не добавляются дубликаты', () => {
        const character1 = new Character('Alena');
        const character2 = new Character('Artem');
        team.addAll(character1, character2, character1);
        expect(team.toArray()).toHaveLength(2);
    });

    test('Конвертируем в массив', () => {
        const character1 = new Character('Alena');
        const character2 = new Character('Artem');
        team.addAll(character1, character2);
        expect(team.toArray()).toEqual([character1, character2]);
    });
});
