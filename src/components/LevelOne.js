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
  const [turnCount, setTurnCount] = useState(0)
  const [playerMana, setPlayerMana] = useState(100)
  const [enemyMana, setEnemyMana] = useState(100)

  const enemyAttack = function(){
    setPlayerHP(playerHP - opponent.attack.normal)
    setTurn(true)
    // setTurnCount(turnCount + 1)
  }
  const enemyHeal = function(){
    setEnemyHP(enemyHP + opponent.heal)
    setTurn(true)
    // setTurnCount(turnCount + 1)
  }
  const enemySpecial = function(){
    setPlayerHP(playerHP - opponent.attack.special)
    setTurn(true)
    // setTurnCount(turnCount + 1)
  }

  const handleAttack = function(){
    if (turn === true && enemyHP > props.game.character.attack.normal){
        setEnemyHP(enemyHP - props.game.character.attack.normal)
        setTurn(false)
        setTurnCount(turnCount + 1)
      } else {
        setEnemyHP(0)
        setTimeout(function() {
          props.win(false)
        }, 500);
      }
  }
  useEffect(function() {
    setTimeout(function() {
      if (playerMana <= 90){
        setPlayerMana(playerMana + 10)
      }
    }, 1500)
  },[turnCount])
  useEffect(function() {
    if (turn === false) {

      setTimeout(function() {
        if (enemyMana <= 90){
          setEnemyMana(enemyMana + 10)
        }
        if (enemyHP >= (opponent.health / 2)) {
          enemyAttack()
        } else if (enemyHP <= (opponent.health / 2) && enemyMana >= 60){
          setEnemyMana(enemyMana - 60)
          enemyHeal()
        } else {
          enemyAttack()
        }
      }, 1500)
    }
  }, [turn])
  console.log(playerMana)
  console.log(turnCount)
  // console.log(opponent)
  // console.log(turn)
  // console.log("MAX ENEMY HEALTH", opponent.health)
  // console.log("CURRENT ENEMY HEALTH", enemyHP)
  // console.log("ATTACK DAMAGE", props.game.character.attack.normal)

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
    if (playerMana >= 60){
      setPlayerMana(playerMana - 60)
      if (turn === true && (playerHP + props.game.character.heal) <= props.game.character.health) {
        setPlayerHP(playerHP + props.game.character.heal)
        setTurn(false)
      } else if (playerHP + props.game.character.heal > props.game.character.health) {
        setPlayerHP(props.game.character.health)
      }
    } else {
      alert("not enough mana")
      setTurn(true)
    }
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
        <Player game={props.game} hp={playerHP} mana={playerMana}/>
        <Enemy enemy={opponent} hp={enemyHP} mana={enemyMana}/>
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