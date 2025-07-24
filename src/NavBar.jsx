import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Home from './pages/Home'
//routing with button we use useNavigate
function NavBar() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>WebPage</h1>
      <ul>
        <NavLink to={'/'}>
          <li>Home</li>
        </NavLink>
        <NavLink to={'/about'}>
          <li>About</li>
        </NavLink>
        <NavLink to={'/product'}>
          <li>Product</li>
        </NavLink>
      </ul>
      <button
        onClick={() => {
          navigate('/product')
        }}
      >
        Info
      </button>
    </div>
  )
}

export default NavBar
