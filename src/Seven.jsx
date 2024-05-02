import {useState, useEffect} from 'react'

function Seven() {
  const [message, setMessage] = useState('');

    useEffect(() => {
      const timer = setTimeout(()=>{
        setMessage('Hello World');
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }, []);

    return (
      <div>
        <h1 className="text-3xl font-bold bg-slate-400">Message: {message}</h1>
      </div>
    )
  }

export default Seven;