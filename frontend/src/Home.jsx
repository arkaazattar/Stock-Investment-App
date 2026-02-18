import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    navigate("/login")
  }

  const handleSignup = (e) => {
    navigate("/signup")
  }

  useEffect(() => {
    fetch('/user')
      .then(res => res.json()) 
      .then(data => {
        setUser(data.user)
        setLoading(false)
      })
  }, []
  )
  if (loading){
    return(
      <p>Loading...</p>
    )
  }

  return (
  <div>
    {user ? <p>Welcome {user}</p> : <p>Please log in</p>}

    {user == "Guest" &&
      <div>
        <button onClick={handleLogin}>Login</button>  
        <button onClick={handleSignup}>Signup</button>
      </div>
    } 
    

  </div>
    )
}  
export default Home
