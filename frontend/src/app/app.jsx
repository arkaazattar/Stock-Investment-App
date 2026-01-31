import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './routes/home.jsx'
import Dashboard from './routes/dashboard.jsx'
import Login from './routes/login.jsx'
import Signup from './routes/signup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
