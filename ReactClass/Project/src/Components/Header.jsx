import React from 'react'
import { NavLink as Navlink } from 'react-router-dom'
import './CSS/Header.css'
// import '../../public/Images/logo.png'
const Header = () => {
  return (
    <>
      <div className="header-outer">
        <div className="header-logo">
          <img src="/Images/logo.png" alt="" />
        </div>
        <div className="header-menu">
          <ul>
            <li><Navlink to='/Home'>Home</Navlink></li>
            <li><Navlink to='/about'>About</Navlink></li>
            <li><Navlink to='/contact'>Contact</Navlink></li>
            <li><Navlink to='/products'>Product</Navlink></li>

          </ul>
        </div>

      </div>
    </>
  )
}

export default Header
