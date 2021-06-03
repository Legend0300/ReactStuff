import React, { useEffect, useState } from "react"

function Show() {
    const [show ,  setShow] = useState(false)
    return(
        <div>
            <h1>
                Show/Hide
                <button className="btn btn-dark" onClick={() => {
                    setShow(!show)
                }}>Show/Hide</button>
                {show && <Item /> }
            </h1>

        </div>
    )
}

const Item = () => {
    const [size , setSize] = useState(window.innerWidth)
    const checkSize = () => {
        setSize(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize" , checkSize)
        return (
            window.removeEventListener("resize" , checkSize)
        )
    })

    return (    
        <div className="container">
        <h1>
            Window : {size} px
        </h1>
        </div>
    )
}

export default Show;    