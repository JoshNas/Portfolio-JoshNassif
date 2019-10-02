import React from 'react'
import ModalImage from "react-modal-image";
import "./projects.css";
import projectTwo1 from './img/projectTwo1.png'
import projectTwo3 from './img/projectTwo3.png'
import projectTwoBig1 from './img/projectTwoBig1.png'
import projectTwoBig3 from './img/projectTwoBig3.png'

const projectTwo = 'Resturant Solutions'
const projectTwoDetails = 'Complete custimizable order system for a restaurant. Employees can log in with assigned PIN and enter orders for tables and guests. Orders are saved in MySQL database with ability to be displayed in multiple locations and provide information to management'

export const Project2 = () => (
  <div className="container">
    <h3 className="col text-center">{projectTwo}</h3>
    <p className="col text-center lead">{projectTwoDetails}</p>
    <div class="row" >
      <div className="col-md-6">
        <ModalImage small={projectTwo1} large={projectTwoBig1} className="projectImage"/>
      </div>
      <div className="col-md-6">
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
