// Player.js


const Player = function(props) {



  return (
    <div className="player">
      <h2>Player</h2>
      <p>{props.game.character.name}</p>
      <img src={`${props.game.character.class}.png`} alt="" />
      <div className="hpContainer">
        <div className="playerHP" style={{ width: `${props.hp / props.game.character.health * 100}%` }}></div>
      </div>
    </div>
  )
}

export default Player