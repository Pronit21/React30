import { useState, useEffect } from 'react';

function Seven() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Set a timer to update the message after 3 seconds
    const timer = setTimeout(() => {
      setMessage('Hello World');
    }, 3000);

    // Clean up the timer when the component unmounts or when the dependency array changes preventing memory leaks
    return () => {
      clearTimeout(timer);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      {/* Display the message */}
      <h1 className="text-3xl font-bold bg-slate-400">Message: {message}</h1>
    </div>
  );
}

export default Seven;