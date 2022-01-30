import React, { useState } from "react";
import './App.css';
import Home from '../src/Home/HomePage'
import Contact from './Contact/Contact'
import Resume from '../src/Resume.js'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from '../src/nav'
import useLocalStorage from 'use-local-storage'
import Button from '@mui/material/Button';
import { IoIosSunny } from "react-icons/io";
function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  } 
  return (
    <div data-theme={theme}>
    <Router>
      <Nav />
       <button onClick={switchTheme}>
       {theme === 'light' ? 'Dark' : 'Light'} Theme <div style={{marginTop:2}}><IoIosSunny /> </div>
        </button>
        <Routes>
           <Route exact path="/" element={<Home />} />
               <Route index element={<Home />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/resume" element={<Resume />}  />
           </Routes>
    </Router>
    </div>
        
    
  );
}

export default App;


