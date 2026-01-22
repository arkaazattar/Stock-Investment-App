import { useState, useEffect } from 'react'

function Home() {
  const url = '/'
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
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
  </div>
    )
  

}  
export default Home

