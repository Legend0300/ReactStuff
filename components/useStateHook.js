import React from "react"
import {useState} from "react"
import UseStateArray from "./Dafa"

function UseStateObject() {
    // const [people , setPeople] = useState(data)
    const [text , setText] = useState("random title")
    const handleclick = () => {
    if (text === "random title") {
        setText("Not Random Title") }
    else{
        setText("random title")
    }
    }

    return(
        <div>
            <UseStateArray />
            {/* <h1 className="item">{newpeople}</h1> */}
            <h1>{text}</h1>
            <button type="button" className="btn btn-dark" onClick={handleclick}>Change Title</button>
        </div>
    )
}
export default UseStateObject;