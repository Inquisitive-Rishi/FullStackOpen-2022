import {useState} from 'react'

const StatisticLine = ({txt, value}) => {
    return (
        <div>
            <p>{txt}: {value}</p>
        </div>
    )
}

const Statistics = (props) => {
    if (props.good === 0 && props.neutral === 0 && props.bad === 0 && props.total === 0) {
        return (
        <div>
            <p>No feedback given.</p>
        </div>
        )
    } return (
        <div>
            <StatisticLine txt="good" value={props.good}/>
            <StatisticLine txt="neutral" value={props.neutral}/>
            <StatisticLine txt="bad" value={props.bad}/>
            <StatisticLine txt="total" value={props.total}/>
            <StatisticLine txt="average" value={props.average}/>
            <StatisticLine txt="positive" value={props.positive}/>
        </div>
    )
}

const Button = (props) => {
    return (
    <div>
        <button onClick={props.click1}>{props.text1}</button>
        <button onClick={props.click2}>{props.text2}</button>
        <button onClick={props.click3}>{props.text3}</button>
    </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    const goodClick = () => setGood(good+1);
    const neutralClick = () => setNeutral(neutral+1);
    const badClick = () => setBad(bad+1);

    return (
    <div>
        <h1>Give your feedback.</h1>
        <Button text1="Good" click1={goodClick} text2="Neutral" click2={neutralClick} text3="Bad" click3={badClick}/>
        <h2>Statistics</h2>
        <Statistics good={good} bad={bad} neutral={neutral} total={good+neutral+bad} average={(good-bad)/(good+neutral+bad)} positive={good/(good+neutral+bad)*100}/>
     
    </div>
    )
}

export default App
