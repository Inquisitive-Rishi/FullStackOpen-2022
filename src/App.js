const Header = (props) => {
  return (
      <div>
       <h1>{props.title}</h1>
      </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>part1 - {props.p1} has {props.ex1} exercises</p>
      <p>part2 - {props.p2} has {props.ex2} exercises</p>
      <p>part3 - {props.p3} has {props.ex3} exercises</p>
       </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total number of exercises are {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header title={course.name}/>
      <Content p1={course.parts[0].name} ex1={course.parts[0].exercises} p2={course.parts[1].name} ex2={course.parts[1].exercises} p3={course.parts[2].name} ex3={course.parts[2].exercises}/>
      <Total total={course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}/>
    </div>
  )

}

export default App;
