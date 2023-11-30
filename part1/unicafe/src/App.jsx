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

const Statistics = ({txt, value}) => {
  return (
    <>
      <p>{txt}:{value}</p>
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
      <Statistics txt='good' value={good}/>
      <Statistics txt='neutral' value={neutral}/>
      <Statistics txt='bad' value={bad}/>
      <Statistics txt='Total' value={total}/>
      <Statistics txt='Average' value={(good - bad)/(total)}/>
      <Statistics txt='Positive' value={(good)/(total)*100+' %'}/>
    </>
  )
}

export default App;