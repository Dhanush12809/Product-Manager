import React from 'react'
import { Link } from 'react-router-dom'
const students = [
  { id: '1', name: 'Ravi' },
  { id: '2', name: 'Priya' },
  { id: '3', name: 'Akhil' },
]
function Student() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link to={`/student/${student.id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Student
