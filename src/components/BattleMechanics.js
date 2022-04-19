// BattleMechanics.js

const Attack = function({attacker, defender}){
  const damageTaken = attacker.attack.normal - defender.level

  return damageTaken
}

export {Attack}