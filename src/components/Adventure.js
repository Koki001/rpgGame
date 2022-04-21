// Adventure.js
import LevelOne from "./LevelOne"
import { useState } from "react"
import { Warrior, Ranger, Mage } from "./PlayerTypes"

const Adventure = function(props) {

  const [startLevel, setStartLevel] = useState(false)
  const [game, setGame] = useState()

  const handleStart = function() {
    if (Warrior.class === props.game.class) {
      setGame({character: Warrior, difficulty: props.game.difficulty})
    } else if (Ranger.class === props.game.class) {
      setGame({character: Ranger, difficulty: props.game.difficulty})
    } else if (Mage.class === props.game.class) {
      setGame({character: Mage, difficulty: props.game.difficulty})
    }
    setStartLevel(true)
  }

  const handleWin = function() {
    alert("GOOD JOB YOU WON")
    setTimeout(function() {
      props.win(false)
    }, 100)
  }

  return (
    <>
    {
      startLevel === false ?
      <>
        <h2>The Journey Begins</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quisquam consequatur reiciendis animi necessitatibus, minus temporibus non ipsum optio, nostrum pariatur quo? Et, magni ullam nihil eos odit animi quia officiis iste ipsa vitae? Tempora ipsa eaque quia similique mollitia inventore ducimus. Nisi laboriosam, ullam est incidunt hic aliquid maxime.</p>
        <button type="button" onClick={handleStart}>OK</button>
      </>
      : <LevelOne game={game} win={handleWin}/>
    }
    </>
  )
}

export default Adventure