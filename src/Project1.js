import React  from 'react'
import ModalImage from "react-modal-image";
import "./projects.css";
import projectOne1 from './img/projectOne1.png'
import projectOne2 from './img/projectOne2.png'
import projectOne3 from './img/projectOne3.png'
import projectOneBig1 from './img/projectOneBig1.png'
import projectOneBig2 from './img/projectOneBig2.png'
import projectOneBig3 from './img/projectOneBig3.png'

const projectOne = 'Arbitrage Finder'
const projectOneDetails = 'Application that cleans and analyzes data pulled from multiple sources to find profitable oppourtunities in a variety of markets. Utilizes Python to acquire, clean, and combine data then iterates through hundreds of combinations efficiently to return situations where arbitrage is available. Includes customizable settings for choosing markets and ability to have results sent by email or displayed within the application.'

export const Project1 = () => (
  <div className="container">
    <h3 className="col text-center" id="project1">{projectOne}</h3>
    <p className="col text-center lead">{projectOneDetails}</p>
    <div class="row" >
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

    <div className="container text-center" id="social-links">
        <a className="btn btn-social btn-github" href="https://github.com/JoshNas/Arb" target="blank" id="social-button">
          <span className="fa fa-github"  id="social-icon"></span> GitHub
        </a>
    </div>

  </div>
)
