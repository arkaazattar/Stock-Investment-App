import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/index.css'
import GetStarted from './GetStarted.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Layout from './components/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<GetStarted />}></Route>
        </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
