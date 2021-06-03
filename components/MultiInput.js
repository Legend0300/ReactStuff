import React , {useRef , useEffect , useState} from 'react'

export default function UseRef0w0() {
    const refContainer = useRef(null)
    const divContainer = useRef(null)

    const handleClick = (e) => {
        e.preventDefault()
        console.log(refContainer.current.value)
        console.log(divContainer.current)
    }
    console.log(refContainer)


    return (
        <div className="container" >
            <h1> UseRef </h1>
            <form className="form" onSubmit={handleClick} >
                <input className="form-control" type="text" ref={refContainer} />
                <button type="submit" className="btn btn-outline-dark" >Submit</button>
            </form>
            <div ref={divContainer} >Hello World 0w0</div>
        </div>
    )
}
