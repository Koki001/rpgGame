// EnemyTypes.js

const EnemyMelee = {
  name: "OrcWar",
  class: "warrior",
  level: 1,
  health: 120,
  attack: {
    normal: 2,
    special: 10,
  },
  defense: 8,
  img: "enemyMelee.png"
}
const EnemyRanged = {
  name: "OrcRange",
  class: "ranger",
  level: 1,
  health: 100,
  attack: {
    normal: 4,
    special: 15,
  },
  defense: 5,
  img: "enemyRanged.png"
}
const EnemyMage = {
  name: "OrcMage",
  class: "mage",
  level: 1,
  health: 80,
  attack: {
    normal: 6,
    special: 20,
  },
  defense: 3,
  img: "enemyMage.png"
}

export {EnemyMelee, EnemyRanged, EnemyMage}