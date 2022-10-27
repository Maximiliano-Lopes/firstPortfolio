
import './Home.css';
import React from "react"
import emailIcon from "../images/enviar.png"
import linkedinIcon from "../images/linkedin.png"
import githubIcon from "../images/github.png"
import whatsappIcon from "../images/whatsapp.png"
import imageMe from "../images/eu.png"
import setaCard from "../images/seta-para-cima.png"
import HtmlIcon from "../images/html-5.png"
import CssIcon from "../images/css-3.png"
import ReactIcon from "../images/atom.png"
import JsIcon from "../images/Javascript.png"
import { Link } from "react-router-dom";



function Home() {
  /* CSS scripts */
  function Remover(){
    let toggle = document.getElementById("toggle")
    let sideBar = document.getElementById("sideBar")
    let sideBarTitle = document.getElementById("sideBarTitle")
    let IconesRedesCelular = document.getElementById("IconesRedesCelular")

    var windowSize = window.innerWidth
    if (windowSize > 500) {
      IconesRedesCelular.classList.remove("active")
    
    }
    if (windowSize < 500) {
      toggle.classList.remove("active")
      sideBarTitle.classList.remove("active")
      sideBar.classList.remove("active")
      
    }
  }

  function Expandir() {
    

    const toggle = document.getElementById("toggle")
    const sideBar = document.getElementById("sideBar")
    const sideBarTitle = document.getElementById("sideBarTitle")
    const RodaPeSide = document.getElementById("RodaPeSide")
    
    var w = window.innerWidth

    if (w < 500) {
      toggle.classList.toggle("active")
      sideBarTitle.classList.toggle("active")
      sideBar.classList.toggle("active")
    }else if(w > 500){
      toggle.classList.toggle("active")
      sideBarTitle.classList.toggle("active")
      sideBar.classList.toggle("active")
      RodaPeSide.classList.toggle("active")
    }
   
  
  }
  

  return (
    <div className="App" onLoad={Remover}>
      <div id="toggle" className="active" onClick={Expandir}></div>
      <nav id="sideBar" className="active">
        <div >
          <p id="sideBarTitle" className="active">PORTFOLIO</p>
          <ul>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/skills">SKILLS</Link>
            </li>
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link to="/contacts">CONTACTS</Link>
            </li>
          </ul>
          <div  id="icones-redes">
            <ul>
              <li>
                <a href="mailto:maxlopes365@gmail.com" target="_blank"><img src={emailIcon} id="emailIcon" alt='Email'/></a>
              </li>
              <li>
              <a href="https://www.linkedin.com/in/maximilianomarqueslopes/" target="_blank"><img src={linkedinIcon} id="linkedinIcon" alt='Linkedin'/></a>
                
              </li>
              <li>
              <a href="https://github.com/Monster1001" target="_blank"><img src={githubIcon} id="githubIcon" alt='Github'/></a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=351933725264&text=Ol%C3%A1,%20gostaria%20de%20conversar%20com%20voc%C3%AA!" target="_blank"><img src={whatsappIcon} id="whatsappIcon" alt="Whatsapp"/></a> 
              </li>
            </ul>
            <p id='RodaPeSide'>Maximiliano Lopes @2022-09</p>
          </div>
        </div>
      </nav>
      <span class = "circle-image">
        <img src={imageMe}/>
      </span>
      <div id='cardBoard'>
         <div>
         <h1 id="tituloHello">Hello,</h1>
          <p>
            I'm Maximiliano, a front-End Dev! Welcome to my Portfolio! <br/><br/>
            
I developed this site so you can see some of my projects and promote my career as a junior dev! <br/> </p>
            <p id="txtIntro">I used the following tools in the production:</p>
            <ul>
              <li><img id="HtmlIcon" src={HtmlIcon}/></li>
              <li><img src={CssIcon}/></li>
              <li><img id="JsIcon" src={JsIcon}/></li>
              <li><img src={ReactIcon}/></li>
            </ul>
         </div>         
      </div>
      <span id='IconesRedesCelular' className='active'>
        <ul>
                <li>
                  <a href="mailto:maxlopes365@gmail.com" target="_blank"><img src={emailIcon} id="emailIcon" alt='Email'/></a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/maximilianomarqueslopes/" target="_blank"><img src={linkedinIcon} id="linkedinIcon" alt='Linkedin'/></a>
                  
                </li>
                <li>
                <a href="https://github.com/Monster1001" target="_blank"><img src={githubIcon} id="githubIcon" alt='Github'/></a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=351933725264&text=Ol%C3%A1,%20gostaria%20de%20conversar%20com%20voc%C3%AA!" target="_blank"><img src={whatsappIcon} id="whatsappIcon" alt="Whatsapp"/></a> 
                </li>
              </ul>
              <p id='RodaPeSideCelular'>Maximiliano Lopes @2022-09</p>
      </span>  
    </div>
  );
}

export default Home;
