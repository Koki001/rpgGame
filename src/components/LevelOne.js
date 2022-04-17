// LevelOne.js

import { useEffect, useState } from "react"
import { EnemyMelee, EnemyRanged, EnemyMage } from "./EnemyTypes"


const LevelOne = function(props) {

  const [turn, setTurn] = useState(true)
  const [opponent, setOpponent] = useState({})

  const handleAttack = function(){
    console.log("attack")
    setTurn(false)
  }
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
  return (
    <div className="battleScreen">
      <h2>LEVEL ONE BATTLE</h2>
      <p>Difficulty: {props.game.difficulty}</p>
      <h2>{turn === true ? "Your Turn" : "Enemy's Turn"}</h2>
      <div className="battleContainer">
        <div className="player">
          <h2>Player</h2>
          <p>{props.game.character.name}</p>
          <img src={`${props.game.character.class}.png`} alt="" />
        </div>
        <div className="enemy">
          <h2>Enemy</h2>
          <p>{opponent.name}</p>
          <img src={opponent.img} alt="" />
        </div>
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