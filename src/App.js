import { useState } from 'react';
import './sass/style.scss';
import GameMenu from './components/GameMenu';

function App() {

  const [gameStart, setGameStart] = useState(false)

  const handleGameStart = function(){
    setGameStart(!gameStart)
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
        gameStart === true ?
        <GameMenu />
        : null
      }
    </>
  );
}

export default App;
