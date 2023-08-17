import Character from './Character';

class Team {
  constructor(...characters) {
    this.characters = characters;
  }

  [Symbol.iterator]() {
    const teamCharacters = this.characters;
    let index = 0;
    return {
      next() {
        if (index < teamCharacters.length) {
          index += 1;
          return {
            value: teamCharacters[index - 1],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}

const bowman = new Character('Лучник', 'Bowman', 50, 1, 4, 10);
const daemon = new Character('Демон', 'Daemon', 100, 1, 30, 30);

const team = new Team(bowman, daemon);
for (const num of team) {
  console.log(num);
}
