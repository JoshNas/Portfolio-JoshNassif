import React from 'react'
import ModalImage from "react-modal-image";
import info from './info/info'
import "./style.css";
import projectTwo1 from './img/projectTwo1.png'
import projectTwo2 from './img/projectTwo2.png'
import projectTwo3 from './img/projectTwo3.png'
import projectTwoBig1 from './img/projectTwoBig1.png'
import projectTwoBig2 from './img/projectTwoBig2.png'
import projectTwoBig3 from './img/projectTwoBig3.png'

export const Project2 = () => (
  <div className="container">
    <h3 className="col text-center">{info.projectTwo}</h3>
    <p className="col text-center lead">{info.projectTwoDetails}</p>
    <div class="row" >
      <div className="col-md-4">
        <ModalImage small={projectTwo1} large={projectTwoBig1} className="projectImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={projectTwo2} large={projectTwoBig2} className="projectImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={projectTwo3} large={projectTwoBig3} className="projectImage"/>
      </div>
    </div>
    <div className="container text-center" id="social-links">
        <a className="btn btn-social btn-github" href="https://github.com/JoshNas/Resturant" target="blank" id="social-button">
          <span className="fa fa-github"  id="social-icon"></span> GitHub
        </a>
    </div>
  </div>
)
