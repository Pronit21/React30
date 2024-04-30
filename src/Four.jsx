import {useState, useEffect} from 'react'

const Four = () => {
  const [color, setColor] = useState('yellow');

  useEffect(() => {
    document.body.style.backgroundColor = color;
}, [color]);

function generateColor() {
    const randomColor =  '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(randomColor);
}

  return (
    <div id="button">
      <button onClick={generateColor}>ZAP!!</button>
      
    </div>
  )
}

export default Four