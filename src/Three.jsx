import {useState} from "react";
import Cookie from "./assets/cookie.png";
import "./App.css";

function Three() {
    const [click, setClick] = useState(0);

    const increment = () => {
        setClick(click + 1);
    }
    
  return (
    <div id="cookie">
        <p>{click} Cookie</p>
        <img src={Cookie} alt="cookie" onClick={increment} />
    </div>
  )
}

export default Three;
