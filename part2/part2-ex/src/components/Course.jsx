const Course = ({courses}) => {
    return (
      <>
      <h1>Web development Curriculum</h1>
      {courses.map(course => {
        return (
        <>
        <h2>{course.name}</h2>
        {course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
        <h4>Total of {course.parts.reduce((acc,curr) => acc+curr.exercises,0)} exercises.</h4>
        </>
        )})}
      </>
    )
  }

export default Course;