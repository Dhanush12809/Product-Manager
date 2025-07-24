import React, { useEffect, useState } from 'react'

async function loadData() {}
function Functional() {
  const [data, setData] = useState([])
  async function fetchAllUsers() {
    try {
      const apiResponce = await fetch('https://dummyjson.com/users')
      const result = await apiResponce.json()
      if (result?.users) {
        setData(result?.users)
      } else {
        setData([])
      }
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchAllUsers()
  }, [])
  console.log(data)
  return (
    <div>
      <h1>Dummy Api</h1>
      <ul>
        {data && data.length > 0 ? (
          data.map((item) => (
            <li key={item?.id}>
              <p>
                {item?.firstName} {item?.lastName}
                {/* ?. means If item is null or undefined, nothing will render —
                it’s safe. */}
              </p>
            </li>
          ))
        ) : (
          <h1>User not found</h1>
        )}
      </ul>
    </div>
  )
}

export default Functional
