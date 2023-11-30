import { useState } from "react";

const LargeTxt = ({txt}) => {
  return (
    <>
      <h1>{txt}</h1>
    </>
  )
}

const Button = ({onClick,txt}) => {
  return (  
    <>
      <button onClick={onClick}>{txt}</button>
    </>
  )
}

const Statistics = ({good, neutral, bad, total, average, positive}) => {
  if (!total) {
    return (
      <>
      <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <p>good:{good}</p>
      <p>neutral:{neutral}</p>
      <p>bad:{bad}</p>
      <p>total:{total}</p>
      <p>average:{average}</p>
      <p>positive:{positive}</p>
    </>
  )
}

const App = () => {
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  const [total, setTotal] = useState(0)
  
  const handleGoodBtn = () => {
    setGood(good+1)
    setTotal(total+1);
  }
  const handleNeutralBtn = () => {
    setNeutral(neutral+1)
    setTotal(total+1);
  }
  const handleBadBtn = () => {
    setBad(bad+1)
    setTotal(total+1);
  }

  return (
    <>
      <LargeTxt txt='Give feedback'/>
      <Button onClick={handleGoodBtn} txt='good'/>
      <Button onClick={handleNeutralBtn} txt='neutral'/>
      <Button onClick={handleBadBtn} txt='bad'/>
      <LargeTxt txt='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={(good-bad)/total} positive={good/total*100}/>
    </>
  )
}

export default App;