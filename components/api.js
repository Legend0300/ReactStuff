import React , {useState , useEffect} from 'react'

const url = "https://api.github.com/users"

export default function Api() {
    const [users , setUsers] = useState([])
    const getUsers = async () => {
        const response = await fetch(url)
        const users = await response.json()
        console.log(users)
        setUsers(users)
    }
    useEffect(() => {
        getUsers()
    } , [])
    return (
        <div className="contianer" >
            <h2>Github Users</h2>
                <ul className="" >
                    {users.map((user) => {
                    const {login , avatar_url , id , html_url} = user
                    return ( 
                        <div>
                        <li className="list-group-item" key={id} >
<div class="card">
  <img class="card-img-top" src={avatar_url} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title"> <kbd> {login} </kbd> </h5>
    <a href={html_url} class="btn btn-outline-dark">Profile</a>
  </div>
</div>
                    </li>
                    </div> )

                })}
                </ul>
            </div>
    )
}
