import Character from './character';

export default class Team {
  constructor() {
    this.players = [];
  }

  add(player) {
    if (player instanceof Character) {
      this.players.push(player);
    } else {
      throw new Error('Invalid player object. Expected an instance of Character.');
    }
  }

  [Symbol.iterator]() {
    let current = 0;
    const { players } = this;
    return {
      next() {
        const done = current >= players.length;
        const value = !done ? players[current++] : undefined;
        return { value, done };
      },
    };
  }
}