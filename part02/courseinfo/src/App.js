const Course = ({course}) => {
const total = course.parts.reduce((acc, init) => acc + init.exercises, 0)

    return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map(list => 
       <li key={list.id}>
          {list.name} - {list.exercises} exercise.
        </li>)}
        <p><strong>Total exercises - {total}</strong></p>
    </div>
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
      },
      {
        name: 'Redux',
        exercises: 15,
        id: 4
      },
      {
        name: 'Hooks',
        exercises: 25,
        id: 5
      }
    ]
  }


  return <Course course={course}/>
}

export default App