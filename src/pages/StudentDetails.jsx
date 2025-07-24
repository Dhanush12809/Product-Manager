import React from 'react'
import { useParams } from 'react-router-dom'
const studentData = {
  1: { name: 'Ravi', age: 20, course: 'B.Tech' },
  2: { name: 'Priya', age: 22, course: 'MBA' },
  3: { name: 'Akhil', age: 21, course: 'B.Sc' },
}

function StudentDetails() {
  const { id } = useParams()
  const student = studentData[id]
  if (!student) {
    return <h2>Student not found</h2>
  }
  return (
    <div>
      <h2>Student Details</h2>
      <p>
        <string>Name:</string>
        {student.name}
      </p>
      <p>
        <string>Age:</string>
        {student.age}
      </p>
      <p>
        <string>Course:</string>
        {student.course}
      </p>
    </div>
  )
}

export default StudentDetails
