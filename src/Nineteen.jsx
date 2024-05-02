import { useState } from 'react';

function Nineteen() {
    const [progress, setProgress] = useState(0); // Fix: Initialize progress state variable with 0

    const updateProgress = () => {
        setProgress(progress + 10);
    };

    return (
        <div>
            <h1 className='text-4xl font-bold text-black'>Progress Bar</h1>
            <div style={{ width: "100%", backgroundColor: "#e0e0e0", borderRadius: "4px" }}>
                <div
                    style={{
                        width: `${progress}%`,
                        backgroundColor: "#007bff",
                        height: "24px",
                        borderRadius: "4px",
                    }}
                ></div>
            </div>
            <p>{progress}% Complete</p>
            <button type="submit" onClick={updateProgress}>Increase Progress</button>
        </div>
    );
}

export default Nineteen;

