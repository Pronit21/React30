import {useState, useEffect} from 'react';

function Seven() {
    const [time, setTime] = useState(60);

    useEffect(()=>{
        if(time>0){
            const timer = setTimeout(()=> setTime(time-1), 1000);
            return ()=> clearTimeout(timer);            
        }

    },[time])
  return (
    <div>
        Time Left: {time} second
    </div>
  )
}

export default Seven