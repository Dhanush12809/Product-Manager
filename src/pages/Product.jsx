import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Product() {
  return (
    <div>
      <h1>Product Page</h1>
      <br />
      <Link to='laptop'>
        <span>Click here to see product</span>
      </Link>
      <Outlet />
    </div>
  )
}

export default Product
