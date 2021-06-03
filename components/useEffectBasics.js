import React , {useEffect , useState} from 'react'

export default function UseEffectBasics() {
    const [size , setSize] = useState(window.innerWidth)
    console.log(size)
    const checkSize = () => {
        setSize(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize" , checkSize)

    })
    return (
        <div className="container">
            <h1>UseEffect Basics</h1>
            <h1>Width</h1>
            <h2>
                {size}
            </h2>
        </div>
    )
}
