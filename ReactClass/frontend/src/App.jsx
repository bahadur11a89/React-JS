import React from 'react'
import MyButton from './Components/MyButton'
import Home from './Components/Home'


const App = () => {

const handlerclick=(msg)=>{
  alert(msg)
}

  return (
    <>
      <h1>This is MyButton Components</h1>
      {/* <MyButton/> */}


    <MyButton text="click1" color="green" handleclick={()=>handlerclick("click first btn")}/>
    <MyButton text="click2" color="blue" handleclick={()=>handlerclick("click second btn")}/>
     <Home/>
    <MyButton text="click2" color="yellow" ved="right" handleclick={()=>handlerclick("click third btn")}/>

    </>
  )
}

export default App
