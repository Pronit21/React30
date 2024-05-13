import { useState, useEffect } from 'react';

function TwentyFour() {
  const [loading, setLoading] = useState("");

  useEffect(() => {
    setLoading("Data is loading...");

    async function fetchData() {
      try {
        const response = await fetch("https://http.cat/status/100");
        const data = await response.json();
        setLoading("Data has been fetched! ✅");
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading("Error fetching data. Please try again later.");
      }
    }

    // Timer to update the state after 3 seconds
    const timer = setTimeout(() => {
      fetchData();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {loading}
    </div>
  );
}

export default TwentyFour;
