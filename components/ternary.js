import React, { useState } from 'react'

export default function Ternary() {
    
    const [text , setText] = useState("this is some text")
    const [error , setError] = useState(false)
    const firstValue = text || "hello world"
    const secondValue = text && "hello world"

    return (
        <div>
            <h1>
                {text && <h2>Hello World</h2>}
                <button className="btn btn-outline-dark" onClick={() => setError(!error)} >Toggle Error</button>
                {error &&  <h1>Error 0w0</h1> }
                {error ? <h1>There is an error :(</h1> : <h1>There is no error 0w0</h1>}
            </h1>
        </div>
    )
}
