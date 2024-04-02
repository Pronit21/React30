import {useState} from 'react'

function Fourteen() {

    const [selectedColor, setSelectedColor] = useState('#000000');

    const handleChange = (e)=>{
        setSelectedColor(e.target.value);
    }
  return (
    <div>
        <input type="color" onChange={handleChange} />
        <div style={{width:'400px', height:'400px', backgroundColor:selectedColor}}>

        </div>
    </div>
  )
}

export default Fourteen;