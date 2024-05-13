//Data Fetching
import { useState, useEffect } from 'react'
import './App.css'

function TwentyThree() {
    const [apodData, setApodData] = useState(null);

    useEffect(()=>{
        async function fetchAPOD(){
            const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        
        const data = await response.json();
        setApodData(data)
        }
        fetchAPOD();
    }, []);

    //Condtionional rendering to avoid properties of null
    return (
        <div style={{ maxHeight: "90vh" }}>
            <h1>Nasa Astronomy picture of the day (APOD)</h1>
            {apodData && (
                <div>
                    <h3>
                        {apodData.title}
                    </h3>
                    <img src={apodData.url} 
                    alt={apodData.title}
                    style={{ maxWidth: "75%" }} />
                    <p>{apodData.explanation}</p>
                </div>
            )}
        </div>
    )
}

export default TwentyThree;