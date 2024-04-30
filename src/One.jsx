import { useState } from 'react';

function One() {
  const [val, setValue] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setValue({
      ...val,
      [e.target.name]: e.target.value
    })
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" value={val.name} onChange={handleChange} name="name" style={{ marginBottom: '10px' }} />
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" value={val.email} onChange={handleChange} name="email" style={{ marginBottom: '10px' }} />
      </form>
    </div>
  )
}

export default One;