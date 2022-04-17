// CustomCharacter.js

const CustomCharacter = function(props) {

  const handleBackButton = function (e) {
    props.back(e.defaultPrevented)
  }
  const handleSaveCharacter = function () {
    console.log("Save this character")
  }

  return (
    <>
      <h2>creating character</h2>
      <button
        type="button"
        onClick={handleBackButton}>
        back
      </button>
      <button
        type="button"
        onClick={handleSaveCharacter}>
        save character
      </button>
    </>
  )
}

export default CustomCharacter