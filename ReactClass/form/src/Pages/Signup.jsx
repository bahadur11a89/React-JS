import React, { useState } from 'react'
import './signup.css'
const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSignup = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields")
      return
    }

    localStorage.setItem("User", JSON.stringify(form))
    alert("Signup Successful ")
  }

  return (
    <div>
      <h1 className='signup-header'>Signup Page</h1>

      <form onSubmit={handleSignup} className='signup-outer'>
        <input
          type="text"
          name="name"
          placeholder='Enter Your name'
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder='Enter your email'
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder='Password'
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default Signup