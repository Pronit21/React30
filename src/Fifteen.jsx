//Props: We have a reusable Welcome component, we need to change the greeting message based on the person, so
//for that we use props.
import  {useState} from "react";

function Fifteen() {
    const [formData, setFormData] = useState({
        name: ' ',
        email: ' ',
        message: ' '

    });

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Hello, ${formData.name}`);
        setFormData({name: "", email: "", message: ""});
    };
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" value={formData.name} onChange={handleChange} name="name"/>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" value={formData.email} onChange={handleChange} name="email" />
        <label htmlFor="message">Message: </label>
        <input type="text" id="message" value={formData.message} onChange={handleChange} name="message" />

        <button type="submit">Submit</button>
    </form>
  )
}

export default Fifteen;