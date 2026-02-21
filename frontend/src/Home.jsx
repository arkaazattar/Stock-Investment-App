import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import background from "./assets/background.png"
import aboutImage from "./assets/triet.jpg"
import newsImage from "./assets/triet2.png"
import exploreImage from "./assets/triet3.png"
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
  <div className='home-page'>
        
        <div className='Content'>

          <div className='FutureText'> 
            <p>The Future of Investing</p>
          </div>
          <h1>Secure Your Financial Future Trade Like an Institutional Pro</h1>
          <button>Get Started</button>
        </div>    

        <div className='AboutUs'>
          <div className='AboutContent'>
            <h2>About Us</h2>
            <p>StockAdvice is a full-stack platform designed to cut through the noise. We aggregate verified online opinions and real-time trend activity to give you clear buy, sell, or hold signals across stocks, ETFs, crypto, and options. Make every trade backed by data, not just hype.</p>
            <button>Learn More</button>
          </div>
          <div className='AboutImageWrapper'>
            <img src={aboutImage} alt="About StockAdvice" className='AboutImage' />
          </div>
        </div>

        <div className='AboutUs'>
          <div className='AboutContent'>
            <h2>News</h2>
            <p>Stay current with market-moving stories, macro updates, and sector headlines curated to help you react faster and trade with stronger context.</p>
            <button>Learn More</button>
          </div>
          <div className='AboutImageWrapper'>
            <img src={newsImage} alt="Market news" className='AboutImage NewsImage' />
          </div>
        </div>

        <div className='AboutUs'>
          <div className='AboutContent'>
            <h2>Explore Stocks</h2>
            <p>Browse trending tickers, compare performance, and evaluate opportunities across sectors with actionable insights built directly into the platform.</p>
            <button>Learn More</button>
          </div>
          <div className='AboutImageWrapper'>
            <img src={exploreImage} alt="Explore stocks" className='AboutImage' />
          </div>
        </div>


        <h2>Frequently Asked Questions</h2>


        <div className="buttons">
          <button>Question 1</button> 
          <button>Question 2</button>
        </div>
  </div>
    )
}  
export default Home;
