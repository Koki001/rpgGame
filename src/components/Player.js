// Player.js


const Player = function(props) {



  return (
    <div className="player">
      <h2>Player</h2>
      <p>{props.game.character.name}</p>
      <img src={`${props.game.character.class}.png`} alt="" />
      <div className="hpContainer">
        <p className="hpDisplay">{props.hp} HP</p>
        <div className="playerHP" style={{ width: `${props.hp / props.game.character.health * 100}%` }}></div>
      </div>
        {
          props.game.character.class === "mage" ?
          <>
            <div className="manaContainer">
              <p className="manaDisplay">{props.mana} MP</p>
              <div className="playerMana" style={{ width: `${props.mana}%` }}></div>
            </div>
          </>
          : null
        }
    </div>
  )
}

export default Player