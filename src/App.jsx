import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar' 
import Home from './components/Home';
import About from './components/About'
import Services from './components/Services'
import Team from './components/Team'
function App() {

  return (
    <>
    <Router>
    <Navbar />
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/services" element={<Services/>} />
  <Route path="/about" element={<About />} />
  <Route path="/team" element={<Team />} />
</Routes>
    </Router>

      
    </>
  )
}

export default App
