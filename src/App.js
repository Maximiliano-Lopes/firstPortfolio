
import './App.css';
import React from "react"
import Home from './pasta/Home.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pasta/About.js'
import Contatos from './pasta/Contacts.js'
import Skills from './pasta/Skills';
import Projetos from './pasta/Projects'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contacts' element={<Contatos/>}/>
      <Route path='/projects' element={<Projetos/>}/>
      <Route path='/skills' element={<Skills/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
