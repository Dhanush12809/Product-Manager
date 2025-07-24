import React from 'react'
import Comp2 from './Comp2'
function Comp1() {
  const name = 'Dhanush'
  return (
    <div className='Box'>
      <h1>Component1</h1>
      <h2>Hi {name}</h2>
      <Comp2 msg={name} />
    </div>
  )
}

export default Comp1
