import React, { useContext } from 'react'
import { GlobalContext } from '../useContext'

function text() {
  const { theme, setTheme } = useContext(GlobalContext)

  return (
    <div>
      <h1
        style={{
          fontSize: theme === 'light' ? '50px' : '100px',
          backgroundColor: theme === 'light' ? '#fff' : '#333',
          color: theme === 'light' ? 'blue' : 'yellow',
        }}
      >
        Using context hook
      </h1>
    </div>
  )
}

export default text
