import React from 'react'
import ModalImage from "react-modal-image";
import info from './info/info'
import "./style.css";
import projectThree1 from './img/projectThree1.png'
import projectThree2 from './img/projectThree2.png'
import projectThree3 from './img/projectThree3.png'
import projectThreeBig1 from './img/projectThreeBig1.png'
import projectThreeBig2 from './img/projectThreeBig2.png'
import projectThreeBig3 from './img/projectThreeBig3.png'

export const Project3 = () => (
  <div className="container">
    <h3 className="col text-center">{info.projectThree}</h3>
    <p className="col text-center lead">{info.projectThreeDescription}</p>
    <p className="col text-center lead">{info.projectThreeDetails}</p>
    <div class="row" >
      <div className="col-md-4">
        <ModalImage small={projectThree1} large={projectThreeBig1} className="projectImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={projectThree2} large={projectThreeBig2} className="projectImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={projectThree3} large={projectThreeBig3} className="projectImage"/>
      </div>
    </div>
    <div className="container text-center">
      <a className="btn btn-social btn-github" href="https://github.com/JoshNas/DFB" target="blank">
        <span className="fa fa-github"></span> GitHub
      </a>
    </div>
  </div>
)
