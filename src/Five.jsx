function Five() {
  function handleFocus(e) {
    e.target.style.backgroundColor = "lightblue";
  }

  function handleBlur(e) {
    e.target.style.backgroundColor = " ";
  }

  function handleKeyDown(e){
    if (e.key === "H" || e.key === "h"){
      e.target.style.backgroundColor="red"
    } else {
      e.target.style.backgroundColor = " ";
    }
  }

  function handleKeyUp(e) {
      e.target.style.backgroundColor = "";
    
  }
  return (
    <div>
      <label htmlFor='name'>Name: </label>
      <input
        type="text"
        id="name"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
    </div>
  )
}

export default Five;
