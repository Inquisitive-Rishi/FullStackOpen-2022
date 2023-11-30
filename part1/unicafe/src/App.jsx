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

const CountStat = ({ txt, value }) => {
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
  
  return (
    <>
      <LargeTxt txt='Give feedback'/>
      <Button onClick={() => setGood(good+1)} txt='good'/>
      <Button onClick={() => setNeutral(neutral+1)} txt='neutral'/>
      <Button onClick={() => setBad(bad+1)} txt='bad'/>
      <LargeTxt txt='statistics'/>
      <CountStat txt='good' value={good}/>
      <CountStat txt='neutral' value={neutral}/>
      <CountStat txt='bad' value={bad}/>
      <CountStat txt='Total' value={good+neutral+bad}/>
      <CountStat txt='Average' value={(good - bad)/(good+neutral+bad)}/>
      <CountStat txt='Positive' value={(good)/(good+neutral+bad)*100+' %'}/>
    </>
  )
}

export default App;