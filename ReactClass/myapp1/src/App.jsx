// import React, { useState } from 'react'
// import Header from './Components/Header'
// import './App.css'
// // import { useRef } from 'react'
// // import Useref from './Componets/Useref'

// const App = () => {

//   // let a = 6
//   // console.log(a)
//   // let name = "Raj"

//   // const [a,seta] =useState(0)
//   // console.log(a)

//   // let [a, setA] = useState(0)

//   // const hanldeDecrement = () => {
//   //   setA(a - 1)
//   // }

//   // const handleIncrement = () => {
//   //   setA(a + 1)
//   // }



//   // const inputRef = useRef ()
//   // const handleClick = () => {
//   //   inputRef.current.value = "Raj"
//   //   inputRef.current.focus()
//   // }






//   return (
//     <>
//       <Header />
//       <h1>Welcome to myapp1</h1>
//     </>
//   )
// }

// export default App



import React from 'react' 
import Usememo from './Components/Usememo'
import Useref from './Useref'
import Usecallback from './Components/Usecallback'


const usememo = () => {
  return (
    <>
      <Usecallback/>
      <Useref />
      <Usememo/>
    </>
  )
}

export default usememo
