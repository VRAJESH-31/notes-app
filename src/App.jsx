import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Landing from './pages/Landing';


const routes = (
  
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<Signup />} />
    </Routes>
  </Router>
);

const App = () => {
  return (
    <div>
      {routes}
    </div> 
  )
}

export default App
