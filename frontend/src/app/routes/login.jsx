import './login.css'
import { useState, useEffect } from 'react' 
function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const response = await fetch("/login",{
            method: "POST",
            // need to implement flask route properly
        } 
        )
    }

    return (
        <form onSubmit={handleSubmit}> 
            <input 
                placeholder="Username" 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button>Submit</button>
        </form>
    )
}

export default Login