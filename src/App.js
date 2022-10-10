
import './App.css';
import React from "react"
import Home from './pasta/Home.js';
import {HashRouter, Routes, Route} from 'react-router-dom'
import About from './pasta/About.js'
import Contatos from './pasta/Contacts.js'
import Skills from './pasta/Skills';
import Projetos from './pasta/Projects'

function App() {
  
  return (
    <HashRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contacts' element={<Contatos/>}/>
      <Route path='/projects' element={<Projetos/>}/>
      <Route path='/skills' element={<Skills/>}/>
    </Routes>
  </HashRouter>
  );
}

export default App;
