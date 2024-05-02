import  { useState } from "react";
import "./Pets.css";

export default function PetAdoptionForm() {
  const [formData, setFormData] = useState({
    name: " ",
    email: " ",
    phoneNumber: " ",
    petPreference: " ",
    additionalInfo: " "
  })
  // Add state for form data here 💖

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Perform form submission logic here
    console.log("Form submitted:", formData);

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      petPreference: "",
      additionalInfo: "",
    });
  }

  // Function to handle input changes
  function handleInputChange(e) {
   
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <h2>Pet Adoption Form 🐾</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required/>
        <br />
        <br />

        <label htmlFor="email">Your Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required/>
        <br />
        <br />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required/>
        <br />
        <br />

        <label>Preferred Pet:</label>
        <br />
        <input
          type="radio"
          id="dog"
          name="petPreference"
          value="dog"
          checked={formData.petPreference === "dog"}
          onChange={handleInputChange}
        />
        <label htmlFor="dog">Dog</label>
        <br />
        <input
          type="radio"
          id="cat"
          name="petPreference"
          value="cat"
          checked={formData.petPreference === "cat"}
          onChange={handleInputChange}
        />
        <label htmlFor="cat">Cat</label>
        <br />
        <input
          type="radio"
          id="other"
          name="petPreference"
          value="other"
          checked={formData.petPreference === "other"}
          onChange={handleInputChange}
        />
        <label htmlFor="other">Other</label>
        <br />
        <br />

        <label htmlFor="additionalInfo">Additional Information:</label>
        <input type="name" name="additionalInfo" onChange={handleInputChange} value={formData.additionalInfo}/>
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}