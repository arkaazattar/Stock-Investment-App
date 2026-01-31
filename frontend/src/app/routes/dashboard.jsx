import { useState, useEffect } from 'react' 
import { Navigate } from 'react-router-dom'
function Dashboard() {
  const url = '/dashboard'
  return (
  <div>
    <button> Login</button>
    <button> Signup </button>
    <button>Guest </button>
  </div>
    )
  

}  
export default Dashboard

