import React from 'react'
import Counter from './Counter'
import LickButton from './LickButton'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import Lottery from './Lottery'
import TicketNum from './TicketNum'

const App = () => {
  return (
    <>
      {/* <h1>Counter</h1>
      <Counter />

      <h1>Like Button</h1>
      <LickButton /> */}

      {/* <LudoBoard /> */}

      {/* <TodoList/> */}


      {/* <Lottery/> */}

      <TicketNum Num={5}/>
      <TicketNum Num={4}/>
      <TicketNum Num={2}/>
      
    </>
  )
}

export default App