import  { useEffect, useState} from 'react'
import './App.css'

function TwentyOne() {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);

  useEffect(()=>{
    if(count > prevCount) {
    console.log("Count has increased")
    } else if (count < prevCount) {
      console.log("Count decreased")
    }

    document.body.style.backgroundColor = count % 2===0 ? 'lightblue' : 'lightgreen';

    setPrevCount(count);
  }, [count, prevCount])

  function handleIncrement(){
    setCount(count+1)
  }

  function handleDecrement(){
    setCount(count-1)
  }

  return (
    <div className="App">
      <button className='btn-plus' onClick={handleIncrement}> Increment</button>
      <p>Count: {count}</p>
      <button className='btn-minus' onClick={handleDecrement} disabled={count===0}> Decrement</button>
    </div>
  )
}

export default TwentyOne;