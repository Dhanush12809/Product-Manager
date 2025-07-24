import React from 'react'
import Comp4 from './Comp4'
function Comp3({ msg }) {
  return (
    <div className='Box'>
      <h1>Component 3</h1>
      <Comp4 msg={msg} />
    </div>
  )
}

export default Comp3
