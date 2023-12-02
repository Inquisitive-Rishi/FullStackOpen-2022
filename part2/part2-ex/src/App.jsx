import { useState } from "react"

const Course = ({course}) => {
  return (
    <>
      <h1>{course.name}</h1>
      {course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
    </>
  )
}

const Total = ({course}) => {
  return (
    <>
    <p>Total of {course.parts.reduce((acc,curr) => acc+curr.exercises,0)} exercises.</p>
    </>
  )
}


const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  return (
    <>
    <Course course={course}/>
    <Total course={course}/>
    </>
  )
}

export default App