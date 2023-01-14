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

    export default Course
    