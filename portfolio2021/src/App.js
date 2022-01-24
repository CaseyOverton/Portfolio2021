import React, {Fragment} from "react";
import './App.css';
import Home from '../src/Home/HomePage'
import Contact from './Contact/Contact'
import Resume from '../src/Resume.js'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from '../src/nav'
function App() {
  return (
    <Router>
      <Nav />
        <Routes>
           <Route exact path="/" element={<Home />} />
               <Route index element={<Home />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/resume" element={<Resume />}  />
           </Routes>
    </Router>
        
    
  );
}

export default App;


