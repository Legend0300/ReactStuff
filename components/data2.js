import React from 'react'
import {useState} from "react"

export default function Person() {
    const [person , setPerson] = useState({
        name: "ahmed" ,
        age: 17 , 
        job: "none"
    })
    const changeJob = () => {
        setPerson({...person , job : "Developer0w0"})
    }
    return (
        <div className="container">
            {console.log(person)}
            <h1>{person.name}</h1>
            <h1>{person.age}</h1>
            <h1>{person.job}</h1>
            <button className="btn btn-outline-dark" onClick={changeJob}>Change job</button>
        </div>
    )
}

