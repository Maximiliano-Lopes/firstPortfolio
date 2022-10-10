import "./Skills.css"
import React from "react";
import { Link } from "react-router-dom";
import emailIcon from "../images/enviar.png"
import linkedinIcon from "../images/linkedin.png"
import githubIcon from "../images/github.png"
import whatsappIcon from "../images/whatsapp.png"
import IpMaiaLogo from "../images/ipmaia-logo.png"
import LogoPucRS from "../images/LogoPucrs.png"
import LogoDEVs from "../images/LogoDEVs.svg"




function Skills() {
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
                            <Link to="/about">ABOUT</Link>
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
            <div id="Corpo-Skills">
                <div id="areaTextoSkills">
                    <ol id="tituloAreaOlEsq">
                    <p id="tituloArea"> Technologies that I'm learning!</p>
                    <br/><br/>
                        <li>
                             Java
                        </li>
                        <li>
                             JavaScript
                        </li>
                        <li>
                             Phyton
                        </li>
                        <li>
                             HTML 5
                        </li>
                        <li>
                             CSS 3
                        </li>
                        <li>
                             React.js
                        </li>
                        <li>
                             MySQL
                        </li>

                    </ol>
                    <ol>
                        <li id="Ipmaia">
                        Currently studying <span>Information Technology, Web and Multimedia</span> at IpMaia!
                        <br/>
                        <a href="https://www.ipmaia.pt/pt/ensino/oferta-formativa/licenciaturas/tecnologias-informacao-web-multimedia" target="_blank"><img src={IpMaiaLogo} id="LogoIpmaia"/></a>
                        <p id="textoDevTheDevs">Certificate obtained:<br/>
                            <a href="https://www.pucrs.br/devs/#o-programa" target="_blank" id="LogoPucrs"><img src={LogoPucRS}/></a>
                            <a href="https://drive.google.com/file/d/19Fvh6rw7xp9Kk3QX6_1Uu6Er_JoAd7r5/view" target="_blank" id="LogoPucrsDEV"><object data={LogoDEVs} style="pointer-events: none;"></object></a>
                            </p>
                        
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Skills