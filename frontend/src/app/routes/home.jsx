import { useState, useEffect } from 'react' 
import { useNavigate } from 'react-router-dom'
function Home() {
  const url = '/'
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();
  useEffect(() => {
    
    fetch('/user')
      .then(res => res.json())
      .then(data => {
        setUser(data)
        setLoading(false)
      })
    }, []
  )
  return (
  <div>
    {loading ? <p>Loading...</p> : (user ? <p>Welcome {user.user}</p> : <p>Please log in</p>)}
    <button onClick={() => navigate('/dashboard')}>Dashboard</button>
  </div>
    )
  

}  
export default Home

