import React from 'react'
import Header from '../Components/Header'
import './CSS/Home.css'

const Home = () => {
  return (
    <>
      <Header />

      <div className="hero-outer">

        
        <div className="hero-text">
          <h1>
            Empowering <br />
            Knowledge. Shaping <br />
            the Future.
          </h1>

          <p>
            Advance your Epsilon journey through accredited online programs <br />
            designed by leading educators. Learn anywhere. Achieve more.
          </p>
        </div>

        
        <div className='hero-image-outer'>
          <div className="counter-image">
            {/* <img src="/Images/logo.png" alt="" /> */}
          </div>
          <div className="back-side"></div>
          <div className="circle-div"></div>

          <img
            src="/Images/schoolgirl.webp"
            alt="student"
            className="hero-image"
          />

        </div>

      </div>
    </>
  )
}

export default Home