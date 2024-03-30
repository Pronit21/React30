import React, { useState, useEffect } from 'react';

function Ten() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    // You can replace this with an API call to fetch quotes from a server
    const quotes = [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Innovation distinguishes between a leader and a follower. - Steve Jobs",
      "Life is what happens when you're busy making other plans. - John Lennon",
      "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
      "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
      "The way to get started is to quit talking and begin doing. - Walt Disney",
      "You miss 100% of the shots you don't take. - Wayne Gretzky",
      "Whether you think you can or you think you can't, you're right. - Henry Ford"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="random-quote">
      <h2>Random Quote</h2>
      <blockquote>{quote}</blockquote>
      <button onClick={fetchQuote}>Generate New Quote</button>
    </div>
  );
}

export default Ten;

