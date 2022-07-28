import React from 'react'
import './App.css';
import  Navbar  from './Components/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import About from './Components/About'
import Comments from './Components/Comments'


function App() {

  return (
   <div className='App'>
    <Navbar/>
    
    <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/comments" element={<Comments />}></Route>
      </Routes>
    </div>
    
)
} 
export default App;