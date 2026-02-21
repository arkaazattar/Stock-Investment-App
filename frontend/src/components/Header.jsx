import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  // this will end up changing once the flask routes work
  const [userStatus, setUserStatus] = useState("Guest");
  
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-logo">
          StockAdvice
        </Link>

        { userStatus === "Guest" && 

        <nav className="site-nav">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
        } 
      
      
      </div>
    </header>
  )
}

export default Header
