// Enemy.js

const Enemy = function (props) {


  return (
    <div className="enemy">
      <h2>Enemy</h2>
      <p>{props.enemy.name}</p>
      <img src={props.enemy.img} alt="" />
      <div className="hpContainerE">
        <p className="hpDisplayE">{props.hp} HP</p>
        <div className="enemyHP" style={{ width: `${props.hp / props.enemy.health * 100}%` }}></div>
      </div>
      {
        props.enemy.class === "mage" ?
          <>
            <div className="manaContainer">
              <p className="manaDisplay">{props.mana} MP</p>
              <div className="playerMana" style={{ width: `${props.mana}%` }}></div>
            </div>
          </>
          : props.enemy.class !== "mage" ?
            <>
              <div className="manaContainer">
                <p className="manaDisplay" style={{ color: "black"}}>{props.mana} ENR</p>
                <div className="playerMana" style={{ width: `${props.mana}%`, backgroundColor: "yellow"}}></div>
              </div>
            </>
          : null
      }
    </div>
  )
}

export default Enemy

