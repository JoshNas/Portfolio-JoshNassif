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
    <h3 className="col text-center" id="project1">{info.projectOne}</h3>
    <p className="col text-center lead">{info.projectOneDescription}</p>
    <p className="col text-center lead">{info.projectOneDetails}</p>
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
    <div className="container text-center">
      <a className="btn btn-social btn-github" href="https://github.com/JoshNas/ArbFinderNew" target="blank">
        <span className="fa fa-github"  id="social-but"></span> GitHub
      </a>
    </div>

  </div>
)
