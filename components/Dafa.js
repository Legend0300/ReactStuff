import React from "react"
import data from "./data"
import {useState} from "react"

function UseStateArray() {
    const [people , setPeople] = useState(data)
    console.log(data)
    const removeItem = (id) => {
        setPeople(people.filter((person) => person.id !== id))
    }
    return(
        <div>
            {people.map( (person) => {
        const {id , name} = person
        return(
            <div className="item" key={id}>
                <h1>{name}</h1>
                <button className="btn btn-dark"  onClick={() => removeItem(id)} >Remove Item</button>
                <hr/>
            </div>
            
        )
    })}
    <hr/>
    <button className="btn btn-dark" type="button" onClick={() => 

        setPeople([])}
        
        >Remove them all 0w0</button>

        <div className="container">

        </div>
           
        </div>
    ) }
    export default UseStateArray