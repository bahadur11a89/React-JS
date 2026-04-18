import React from 'react'
import Usechild from './Usechild'

const Usecallback = () => {
     
  const [count, setCount] = React.useState(0)

  const handleclick = () => {
    setCount(count + 1)
  }



  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count+1)}>+</button>
      <Usechild handleclick={handleclick}/>
    
    </>
  )
}

export default Usecallback
