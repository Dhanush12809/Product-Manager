import React from 'react'
import Comp3 from './Comp3'
function Comp2({ msg }) {
  return (
    <div className='Box'>
      <h1>Component2</h1>
      <Comp3 msg={msg} />
    </div>
  )
}

export default Comp2
