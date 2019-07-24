import React  from 'react'
import ModalImage from "react-modal-image";
import info from './info/info'
import "./style.css";
import projectOne1 from './img/projectOne1.png'
import projectOne2 from './img/projectOne2.png'
import projectOne3 from './img/projectOne3.png'
import projectOneBig1 from './img/projectOneBig1.png'
import projectOneBig2 from './img/projectOneBig2.png'
import projectOneBig3 from './img/projectOneBig3.png'

export const Project1 = () => (
  <div className="container">
    <p class="lead"></p>
    <div class="row" >
      <p className="lead">Pulls and analyzes data from the web to find profitable oppourtunities in a variety of markets. The program combines and cleans data from multiple sources then compares it to find arbitrage and value opportunities. Optionally functonality to send email alerts.Pulls and analyzes data from the web to find profitable oppourtunities in a variety of markets. The program combines and cleans data from multiple sources then compares it to find arbitrage and value opportunities. Optionally functonality to send email alerts.</p>
      <div className="col-md-4">
        <ModalImage small={projectOne1} large={projectOneBig1} className="projectImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={projectOne2} large={projectOneBig2} className="projectImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={projectOne3} large={projectOneBig3} className="projectImage"/>
      </div>
    </div>
  </div>
)
