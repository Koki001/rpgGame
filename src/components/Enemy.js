// Enemy.js

const Enemy = function (props) {


  return (
    <div className="enemy">
      <h2>Enemy</h2>
      <p>{props.enemy.name}</p>
      <img src={props.enemy.img} alt="" />
      <div className="hpContainer">
        <div className="playerHP" style={{ width: `${props.hp / props.enemy.health * 100}%` }}></div>
      </div>
    </div>
  )
}

export default Enemy

