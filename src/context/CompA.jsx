import React from 'react'
import MessageContext from './MessageContext'
import CompB from './CompB'
function CompA() {
  const name = 'Sujith'
  return (
    <div>
      <h4>Component 1</h4>
      <MessageContext.Provider value={{ msg: name }}>
        <CompB />
      </MessageContext.Provider>
    </div>
  )
}

export default CompA
