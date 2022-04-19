// LevelOne.js

import { useEffect, useState } from "react"
import { EnemyMelee, EnemyRanged, EnemyMage } from "./EnemyTypes"
import { Attack } from "./BattleMechanics"
import Player from "./Player"
import Enemy from "./Enemy"


const LevelOne = function(props) {

  const [turn, setTurn] = useState(true)
  const [opponent, setOpponent] = useState({})
  const [playerHP, setPlayerHP] = useState(props.game.character.health)
  const [enemyHP, setEnemyHP] = useState(opponent.health)

  const handleAttack = function(){
    console.log("attack")
    setTurn(false)

    setEnemyHP(enemyHP - props.game.character.attack.normal)

  }
  if (turn === false){
    setPlayerHP(playerHP - opponent.attack.normal)
    setTurn(true)
  }
  console.log(turn)
  console.log("MAX ENEMY HEALTH", opponent.health)
  console.log("CURRENT ENEMY HEALTH", enemyHP)
  console.log("ATTACK DAMAGE", props.game.character.attack.normal)

  const handleSpecial = function () {
    console.log("Special")
    setTurn(false)
  }
  const handleDefend = function () {
    console.log("Defend")
    setTurn(false)
  }
  const handleHeal = function () {
    console.log("Heal")
    setTurn(false)
  }
  const handleRetreat = function () {
    console.log("Retreat")
    setTurn(false)
  }
  const enemy = [
    EnemyMelee, EnemyRanged, EnemyMage
  ]

  useEffect(function() {
    setOpponent(enemy[Math.floor(Math.random() * 3)])
  },[])
  useEffect(function () {
    setEnemyHP(opponent.health)
  }, [opponent])

  return (
    <div className="battleScreen">
      <h2>LEVEL ONE BATTLE</h2>
      <p>Difficulty: {props.game.difficulty}</p>
      <h2>{turn === true ? "Your Turn" : "Enemy's Turn"}</h2>
      <div className="battleContainer">
        <Player game={props.game} hp={playerHP}/>
        <Enemy enemy={opponent} hp={enemyHP}/>
      </div>
      <div className="fightActions">
        <button type="button"
          onClick={handleAttack}>
          Attack
        </button>
        <button type="button"
          onClick={handleSpecial}>
          Special
        </button>
        <button type="button"
          onClick={handleDefend}>
          Defend
        </button>
        <button type="button"
          onClick={handleHeal}>
          Heal
        </button>
        <button type="button"
          onClick={handleRetreat}>
          Retreat
        </button>
      </div>
    </div>
  )
}

export default LevelOne