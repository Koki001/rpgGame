// PlayerStats.js

const Warrior = {
  name: "Fighter",
  class: "warrior",
  level: 1,
  health: 120,
  attack: {
    normal: 5,
    special: 10,
  },
  defense: 8,
  heal: 15,
}
const Ranger = {
  name: "Archer",
  class: "ranger",
  level: 1,
  health: 100,
  attack: {
    normal: 7,
    special: 15,
  },
  defense: 5,
  heal: 15,
}
const Mage = {
  name: "Caster",
  class: "mage",
  level: 1,
  health: 80,
  mana: 100,
  attack: {
    normal: 42,
    special: 20,
  },
  defense: 3,
  heal: 15,
}

export {Warrior, Ranger, Mage}