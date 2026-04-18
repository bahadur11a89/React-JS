import React, { useState } from 'react'

const App = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    hobbies: [],
    country: ""
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          hobbies: [...formData.hobbies, value]
        })
      } else {
        setFormData({
          ...formData,
          hobbies: formData.hobbies.filter((h) => h !== value)
        })
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <b>Name :-</b>
        <input name='name' type="text" onChange={handleChange} /> <br /> <br />

        <b>Email :-</b>
        <input name='email' type="text" onChange={handleChange} /> <br /> <br />

        <b>Phone :-</b>
        <input name='phone' type="text" onChange={handleChange} /> <br /> <br />

        <b>Gender :-</b>
        <input type="radio" name='gender' value="male" onChange={handleChange} />
        <span> Male</span>
        <input type="radio" name='gender' value="female" onChange={handleChange} />
        <span> Female</span>

        <br /> <br />
        <b>Hobby :-</b>
        <input type="checkbox" value='reading' onChange={handleChange} />
        <span> Reading</span>
        <input type="checkbox" value='coding' onChange={handleChange} />
        <span> Coding</span>
        <input type="checkbox" value='traveling' onChange={handleChange} />
        <span> Traveling</span>

        <br /><br />
        <b>City :-</b>
        <select name="country" onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="Lucknow">Lucknow</option>
          <option value="Azamgarh">Azamgarh</option>
          <option value="Ambedkar Nagar">Ambedkar Nagar</option>
        </select>

        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App