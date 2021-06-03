import React , {useState , useEffect} from "react"

const url = "https://api.github.com/users/QuincyLarson"

function CondtionalFunction() {
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState(false)
    const [user , setUser] = useState("default user")
    
    useEffect(() => {
        fetch(url)
        .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
            return resp.json()
        } else{
        setLoading(false)
        setError(true)
        throw new Error(resp.statusText)
    } })
        .then((user) => {
        const {login} = user
        setUser(login)
        setLoading(false)
         } )
        .catch((error) => console.log(error))
    } , [])
    
    if (loading) {    
        return(
            <div className="container">
                <h1>
                    Loading...
                </h1>
            </div>
        ) } 
        if (error){
            return (
                <div>
                    <h2>
                        Error :(
                    </h2>
                </div>
            )
        }
        else {
            return(
                <div>
                    <h1>
                    {user}
                    </h1>
                </div>
            )
        }
}
export default CondtionalFunction;