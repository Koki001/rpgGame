import { useState } from 'react';
import './sass/style.scss';
import GameMenu from './components/GameMenu';
import Adventure from './components/Adventure'

function App() {

  const [gameStart, setGameStart] = useState(false)
  const [battle, setBattle] = useState(false)
  const [adventureStart, setAdventureStart] = useState(false)
  const [game, setGame] = useState({})

  const handleGameStart = function() {
    setGameStart(!gameStart)
    setBattle(false)
    setAdventureStart(false)
  }
  const handleBattle = function(e) {
    setBattle(e)
  }
  const handleAdventureStart = function() {
    setAdventureStart(true)
  }
  const handleGame = function(e) {
    setGame(e)
  }
  return (
    <>
      <h1>We Must Fight</h1>
      <button 
        className='startGameButton' 
        type='button'
        onClick={handleGameStart}>
        {
          gameStart === false ?
          "START GAME" 
          : "END GAME"
        }
      </button>
      {
        gameStart === true && adventureStart === false ?
        <GameMenu start={handleBattle} gameInfo={handleGame}/>
        : null
      }
      {
        battle === true && adventureStart === false ?
        <button type='button' onClick={handleAdventureStart}>Adventure on</button>
        : null
      }
      {
        adventureStart === true && battle === true ?
        <Adventure game={game}/>
        : null
      }
    </>
  );
}

export default App;
