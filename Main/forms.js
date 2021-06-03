import React, { useState } from 'react'
import Person from './components/data2'

export default function Forms() {
    
    const [firstName , setfirstName] = useState("")
    const [email , setEmail] = useState("")
    const [people , setPeople] = useState([])

    const handleClick = (e) => {
        e.preventDefault()
        if (firstName && email) {
            const person = {firstName: firstName , email: email}
            setPeople((people) => {
                console.log(people)
                 return [...people , person]
                
            })
        } else{
            console.log("Form is empty :(")
        }
        setfirstName("")
        setEmail("")
    }
    return (
        <div className="container" >
            Forms
            <form className="form" onSubmit={handleClick} >
                <div className="form-control" >
                    <label htmlFor="FirstName">FirstName:     </label>
                    <input type="text" name="FirstName" id="FirstName" value={firstName} onChange={(e) => {setfirstName(e.target.value)}}/>
                </div>
                <div className="form-control" >
                    <label htmlFor="email">email:    </label>
                    <input type="text" name="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                </div>
                <button className="btn btn-outline-dark">Add person</button>
            </form>
            <h1>
                {people.map((person) => {
                    const {email , firstName , id} = person
                    return <div className="item" key={id} >
                        <ul>    
                            <h1> Email: {email}</h1>
                            <h1> FirstName: {firstName}</h1>
                        </ul>
                    </div>
                })}
            </h1>
        </div>
    )
}
