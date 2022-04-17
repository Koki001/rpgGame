// Playing.js
import { useEffect, useState } from "react"
import { Warrior, Ranger, Mage } from "./PlayerStats"

const Playing = function(props) {

  const [selection, setSelection] = useState()
  const [chosenCharacter, setChosenCharacter] = useState({})

  useEffect(function() {
    if (Warrior.class === props.selection.class) {
      setSelection("Warrior")
      setChosenCharacter(Warrior)
    } else if (Ranger.class === props.selection.class) {
      setSelection("Ranger")
      setChosenCharacter(Ranger)
    } else if (Mage.class === props.selection.class) {
      setSelection("Mage")
      setChosenCharacter(Mage)
    }
  }, [])
  console.log(chosenCharacter)
  if (chosenCharacter.name) {
    return (
      <>
        <h2>GAME ON</h2>
        <p>You are playing with a {selection}</p>
        <p>Difficulty: {props.selection.difficulty}</p>
        <div className="characterInfoContainer">
          <img className="characterImage" src={`${selection}.png`} alt="" />
          <div className="characterStats">
            <p>Name: {chosenCharacter.name}</p>
            <p>Level: {chosenCharacter.level}</p>
            <p>Health: {chosenCharacter.health}</p>
            <p>Normal Attack: {chosenCharacter.attack.normal}</p>
            <p>Special Attack: {chosenCharacter.attack.special}</p>
            <p>Defense: {chosenCharacter.defense}</p>
          </div>
        </div>
      </>
    )
  }
}

export default Playing