import { Character, Magician, Daemon } from '../basic';

describe('Character class', () => {
    test('should create a character with default values', () => {
        const character = new Character();
        expect(character.distance).toBe(0);
        expect(character.stoned).toBe(false);
    });

    test('should calculate attack without stoned', () => {
        const character = new Character();
        character.distance = 2;
        expect(character.attack).toBe(90);
    });

    test('should calculate attack with stoned', () => {
        const character = new Character();
        character.distance = 2;
        character.stoned = true;
        expect(character.attack).toBe(85);
    });

    test('should throw error when setting attack directly', () => {
        const character = new Character();
        expect(() => {
            character.attack = 100;
        }).toThrow('Cannot set attack value directly.');
    });

    test('should set stoned value', () => {
        const character = new Character();
        character.stoned = true;
        expect(character.stoned).toBe(true);
    });

    test('should throw error when setting stoned value to non-boolean', () => {
        const character = new Character();
        expect(() => {
            character.stoned = 'true';
        }).toThrow('Stoned value must be a boolean.');
    });
});

describe('Magician class', () => {
    test('should create a magician with default values', () => {
        const magician = new Magician();
        expect(magician.distance).toBe(0);
        expect(magician.stoned).toBe(false);
    });
});

describe('Daemon class', () => {
    test('should create a daemon with default values', () => {
        const daemon = new Daemon();
        expect(daemon.distance).toBe(0);
        expect(daemon.stoned).toBe(false);
    });
});
