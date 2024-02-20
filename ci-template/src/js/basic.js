class Character {
  constructor(name) {
      this.name = name;
  }
}

class Team {
  constructor() {
      this.members = new Set();
  }

  add(player) {
      if (this.members.has(player)) {
          throw new Error(`Character ${player.name} is already in the team.`);
      } else {
          this.members.add(player);
      }
  }

  addAll(...players) {
      players.forEach(player => {
          if (!this.members.has(player)) {
              this.members.add(player);
          }
      });
  }

  toArray() {
      return Array.from(this.members);
  }
}

export { Character, Team };