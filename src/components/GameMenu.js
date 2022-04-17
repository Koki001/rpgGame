// GameMenu.js

import { useState } from "react"
import CustomCharacter from "./CustomCharacter"
import Playing from "./Playing"
import { Warrior, Ranger, Mage } from "./PlayerTypes"

const GameMenu = function(props) {

  const [characterSelect, setCharacterSelect] = useState()
  const [difficultySelect, setDifficultySelect] = useState()
  const [createCharacter, setCreateCharacter] = useState(false)
  const [gameStart, setGameStart] = useState(false)

  const handleCreateCharacter = function() {
    setCreateCharacter(!createCharacter)
  }
  const handleSaveCharacter = function(e) {
    setCreateCharacter(e)
  }
  const handleBackButton = function (e) {
    setCreateCharacter(e)
  }
  const handleGameStart = function(e) {
    props.start(e)
    props.gameInfo({class: characterSelect, difficulty: difficultySelect})
    setGameStart(true)
  }
  const handleCharacterSelect = function(e) {
    setCharacterSelect(e.target.value)
  }
  const handleDifficultySelect = function(e) {
    setDifficultySelect(e.target.value)
  }
  const warriorStats = <>
                        <p>Name: {Warrior.name}</p>
                        <p>Level: {Warrior.level}</p>
                        <p>Health: {Warrior.health}</p>
                        <p>Normal Attack: {Warrior.attack.normal}</p>
                        <p>Special Attack: {Warrior.attack.special}</p>
                        <p>Defense: {Warrior.defense}</p>
                      </>
  const rangerStats = <>
                        <p>Name: {Ranger.name}</p>
                        <p>Level: {Ranger.level}</p>
                        <p>Health: {Ranger.health}</p>
                        <p>Normal Attack: {Ranger.attack.normal}</p>
                        <p>Special Attack: {Ranger.attack.special}</p>
                        <p>Defense: {Ranger.defense}</p>
                      </>
  const mageStats = <>
                      <p>Name: {Mage.name}</p>
                      <p>Level: {Mage.level}</p>
                      <p>Health: {Mage.health}</p>
                      <p>Normal Attack: {Mage.attack.normal}</p>
                      <p>Special Attack: {Mage.attack.special}</p>
                      <p>Defense: {Mage.defense}</p>
                    </>
  return (
    
    createCharacter === false && gameStart === false ?
    <>
      <div className="characterSelectContainer">
        <h2>Select your champion</h2>
        <form className="characterSelect" action=""
        onChange={handleCharacterSelect}>
          <input type="radio" id="warrior" name="character" value={"warrior"}/>
          <label className="charImgWarrior" htmlFor="warrior"><img src={"warrior.png"} alt="" />Warrior<span className="selectStats warriorStats">{warriorStats}</span></label>
          <input type="radio" id="ranger" name="character" value={"ranger"}/>
          <label className="charImgRanger" htmlFor="ranger"><img src={"ranger.png"} alt="" />Ranger<span className="selectStats rangerStats">{rangerStats}</span></label>
          <input type="radio" id="mage" name="character" value={"mage"}/>
          <label className="charImgMage" htmlFor="mage"><img src={"mage.png"} alt="" />Mage<span className="selectStats mageStats">{mageStats}</span></label>
          
        </form>
        <h2>Or</h2>
      <button 
        type="button"
        onClick={handleCreateCharacter}>
        create character
      </button>
      </div>
      <div className="difficultySelectContainer">
        <h2>Select difficulty</h2>
          <form className="difficultySelect" action=""
          onChange={handleDifficultySelect}>
            <input type="radio" id="easy" name="difficulty" value={"easy"} />
            <label htmlFor="easy">easy</label>
            <input type="radio" id="medium" name="difficulty" value={"medium"} />
            <label htmlFor="medium">medium</label>
            <input type="radio" id="hard" name="difficulty" value={"hard"} />
            <label htmlFor="hard">hard</label>
          </form>
      <button 
        className="startGame"
        onClick={() => {handleGameStart(true)}}>
        start
      </button>
      </div>
    </>
    : gameStart === true ?
    <Playing 
      selection={{class: characterSelect, difficulty: difficultySelect}}/>
    :
    <CustomCharacter 
      save={handleSaveCharacter}
      back={handleBackButton}
    />
  )
}

export default GameMenu