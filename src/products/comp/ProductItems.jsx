import React from 'react'
function productItems(props) {
  const products = ['product1', 'product2', 'product3']
  const { name, city } = props
  return (
    <div>
      <h1>Ecommerce website</h1>
      <ul>
        {products.map((items, index) => (
          <li key={index}>{items}</li>
        ))}
      </ul>
      <p>
        My name is {name} i am from {city}
      </p>
    </div>
  )
}

export default productItems
