import React, { useState , useEffect } from 'react'
import data3 from "./data3"

function Birthday() {
    const [birthday , setBirthday] = useState(data3)
    const people = birthday.map(
        function People(person) {
            const {name , id , age , image} = person
            return(
                <div  key={id} className="container">
            <h1> 
                name: {name}
                 | Age: {age}
                {/* <img src={image} alt={name}/> */}
                <hr/>
            </h1>
                </div>

            )
        }
    )

    const RemoveItem = () => {
        setBirthday(people.filter((id) => {
            return (id != people.id ? people.id : people.id)
        }
        ))
    }
    return(
        <div>
            <h1>
                {people}
                <button className="btn btn-dark" onClick={RemoveItem} >Remove Button</button>
            </h1>
        </div>
    	) }

export default Birthday
