import  { useState, useEffect } from 'react';

function Twelve() {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        // Code to run on component mount
        const intervalId = setInterval(function(){
            if (toggle) {
                const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
                document.body.style.backgroundColor = randomColor;
            }
        }, 1000);

        return () => {
            // Code to run on component unmount
            clearInterval(intervalId)
        };
    }, [toggle]);

    const handleToggle=()=>{
        setToggle(prevToggle => !prevToggle);
    };

    return (
        <div id="toggle">
            <button onClick={handleToggle}>{toggle ? "Stop": "Start"} Color Changing</button>
        </div>
    );
}

export default Twelve;