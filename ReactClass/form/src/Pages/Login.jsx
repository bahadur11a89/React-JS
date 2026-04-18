import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()

    const savedUser = JSON.parse(localStorage.getItem("User"))

    if (!savedUser) {
      alert("No user found, please signup first")
      return
    }

    if (
      savedUser.email === formData.email &&
      savedUser.password === formData.password
    ) {
      alert("Login Successfully")
      navigate("/dashboard")  
    } else {
      alert("User does not exist")
    }
  }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin} className="login-outer">
        <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
        <br /><br />

        <input type="password" name="password" placeholder="Enter your password" onChange={handleChange}/>
        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login