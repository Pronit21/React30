import { useState, useEffect } from 'react';

function Twelve() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;

                    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0f21d12ed60a3cd6a67007e05acef0af`)
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error('Failed to fetch weather data');
                            }
                            return response.json();
                        })
                        .then((data) => {
                            setWeather(data);
                            setLoading(false);
                        })
                        .catch((error) => {
                            setError(error.message);
                            setLoading(false);
                        });
                },
                (error) => {
                    setError(error.message);
                    setLoading(false);
                }
            );
        } else {
            setError('Geolocation is not supported by your browser');
            setLoading(false);
        }
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : weather ? (
                <div>
                    <h2>Current Weather</h2>
                    <p>Temperature: {weather.main.temp}</p>
                    <p>Conditions: {weather.weather[0].description}</p>
                </div>
            ) : null}
        </div>
    );
}

export default Twelve;
