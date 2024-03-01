import Character from './character';

class Team {
  constructor() {
    this.players = [];
    this.numberOfPlayers = 0;
  }

  add(player) {
    if (player instanceof Character) {
      this.players.push(player);
      this.numberOfPlayers += 1;
    } else {
      throw new Error('Invalid player object. Expected an instance of Character.');
    }
  }

  *[Symbol.iterator]() {
    for (let player of this.players) {
      yield player;
    }
  }
}

const team = new Team();

const player1 = new Character({ name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10 });
const player2 = new Character({ name: 'Воин', type: 'Warrior', health: 60, level: 2, attack: 50, defence: 20 });
team.add(player1);
team.add(player2);
