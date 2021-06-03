import React, { useState , useContext} from 'react'
import data from "./data"
import Person from './data2'

const personContext = React.createContext()

export default function PropDrilling() {
    const [people , setPeople] = useState(data)
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id)
        })
    }

    return (
        <personContext.Provider value={{ removePerson }} >
        <div className="container">
            <h1>Context API / Use Context</h1>
        <List people={people}/>
        </div>
        </personContext.Provider>
    )
}
const List = ({people}) => {
    return (people.map((person) => {
        return <SingleItem key={person.id} {...person}/>
    })) }
    const SingleItem = ({id , name}) => {
        const { removePerson } = useContext(personContext)
        return( 
        <div className="container" >
            <h1>{name}</h1>
            <button className="btn" onClick={() => {
                removePerson(id)
                console.log(id)
            }}>Remove</button>
        </div>)
    
}
