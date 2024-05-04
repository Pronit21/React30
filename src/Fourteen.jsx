import { useState } from 'react';

function Fourteen() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${formData.name}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form >
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" value={formData.name} onChange={handleChange} name="name" />
      <label htmlFor="email">Email: </label>
      <input type="text" id="email" value={formData.email} onChange={handleChange} name="email" />
      <label htmlFor="message">Message: </label>
      <input type="text" id="message" value={formData.message} onChange={handleChange} name="message" />
      <button type="Submit" onSubmit={handleSubmit}>Submit</button>
    </form>
  );
}

export default Fourteen;
