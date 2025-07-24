import React, { useContext } from 'react'
import { GlobalContext } from '../useContext'

function button() {
  const { theme, setTheme } = useContext(GlobalContext)
  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Click me
      </button>
    </div>
  )
}

export default button
