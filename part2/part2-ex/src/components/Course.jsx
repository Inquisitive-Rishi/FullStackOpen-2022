const Course = ({course}) => {
    return (
      <>
        <h1>{course[0].name}</h1>
        {course[0].parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
        <h4>Total of {course[0].parts.reduce((acc,curr) => acc+curr.exercises,0)} exercises.</h4>
      </>
    )
}

export default Course;