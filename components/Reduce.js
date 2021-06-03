import React , {useState , useReducer} from 'react'
import data from "./data" 
import Modal from "./Modal"
export default function Reduce() {
    
    const [people , setPeople] = useState(data)
    const [name , setName] = useState("")
    const [showModal , setModalModal] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            {showModal && <Modal />}
            <form className="form">
                <input type="text"  
                className="form-control"
                value={name}
                onChange={(e) => { setName(e.target.value)}}/>
                <button type="submit" onSubmit={handleSubmit} className="btn btn-outline-dark" >Add</button>
            </form>
        </div>
    )
}
