import React , {useState} from 'react'

export default function Counter() {
    const [counter  , setCounter] = useState(0)
    const Increase = () => {
        setCounter(counter + 1)
    }
    const Reset = () => {
        setCounter(0)
    }
    const Decrease = () => {
        setCounter(
            counter - 1
        )}
    const complexCounter = () => {
        setCounter( (prevCounter) => {
            return prevCounter + 1
        } )
    }
    return (
        <div className="container">
            <div>    
                <h1>Regular Counter</h1>
                <h2 className="container1">{counter}</h2>
            </div>
            <button onClick={Increase} className="btn btn-dark">Increase</button>
            <button onClick={Reset} className="btn btn-dark">Reset</button>
            <button onClick={Decrease} className="btn btn-dark">Decrease</button>
            <div>
                <h1>Complex Counter</h1>
                <h2>{counter}</h2>
                <button className="btn btn-outline-dark" onClick={complexCounter} >Increase</button>
            </div>
        </div>
    )
}
