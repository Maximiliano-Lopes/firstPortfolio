import "./about.css"
import React from "react";
import emailIcon from "../images/enviar.png"
import linkedinIcon from "../images/linkedin.png"
import githubIcon from "../images/github.png"
import whatsappIcon from "../images/whatsapp.png"
import EuEspelho from "../images/eu-espelho.png"
import { Link } from "react-router-dom";




function About() {
    function Remover(){
        const toggle = document.getElementById("toggle")
        const sideBar = document.getElementById("sideBar")
        const sideBarTitle = document.getElementById("sideBarTitle")
    
        var w = window.innerWidth
        if (w < 500) {
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
        <div onLoad={Remover}>
        <div id="toggle" className="active" onClick={Expandir}></div>
            <nav id="sideBar" className="active">
                <div >
                    <p id="sideBarTitle" className="active">PORTFOLIO</p>
                    <ul> 
                    <li>
                            <Link to="/">HOME</Link>
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
                    <div id="icones-redes">
                        <ul>
                            <li>
                                <a href="mailto:maxlopes365@gmail.com" target="_blank"><img src={emailIcon} id="emailIcon" alt='Email' /></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/maximilianomarqueslopes/" target="_blank"><img src={linkedinIcon} id="linkedinIcon" alt='Linkedin' /></a>

                            </li>
                            <li>
                                <a href="https://github.com/Monster1001" target="_blank"><img src={githubIcon} id="githubIcon" alt='Github' /></a>
                            </li>
                            <li>
                                <a href="https://api.whatsapp.com/send?phone=351933725264&text=Ol%C3%A1,%20gostaria%20de%20conversar%20com%20voc%C3%AA!" target="_blank"><img src={whatsappIcon} id="whatsappIcon" alt="Whatsapp" /></a>
                            </li>
                        </ul>
                        <p id='RodaPeSide'>Maximiliano Lopes @2022-09</p>
                    </div>
                </div>
            </nav>
            <div id="Corpo-About">
                <span id="fundo-img">
                    <img src={EuEspelho}/>
                </span>
                <div id="areaTextoAbout">
                    <p>
                    I am studious, I strive in everything I do, aiming to be better than the "I" yesterday. Nowadays I do what is necessary to achieve my goals, which are to reach the professional title of Programmer. I'm still starting in the area, but I've shown great affinity with the environment, I'm committed and I have a lot of dedication.
                    </p>
                    <p>
                    I currently live in Porto, Portugal but I'm naturally from Brazil.
                    
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About