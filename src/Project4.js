import React from 'react'
import ModalImage from "react-modal-image";
import info from './info/info'
import "./style.css";
import coffeeLogin from './img/coffeeLogin.png'
import coffeeOrder from './img/coffeeOrder.png'
import coffeeLoginBig from './img/coffeeLoginBig.png'
import coffeeOrderBig from './img/coffeeOrderBig.png'


export const Project4 = () => (
  <div className="container">
    <h3 className="col text-center">{info.projectFour}</h3>
    <p className="col text-center lead">{info.projectFourDetails}</p>
    <div class="row" >
      <div className="col-md-6">
        <ModalImage small={coffeeLogin} large={coffeeLoginBig} className="projectImage"/>
      </div>
      <div className="col-md-6">
        <ModalImage small={coffeeOrder} large={coffeeOrderBig} className="projectImage"/>
      </div>
    </div>
    <div className="container text-center" id="social-links">
        <a className="btn btn-social btn-github" href="https://github.com/JoshNas/Coffee" target="blank" id="social-button">
          <span className="fa fa-github"  id="social-icon"></span> GitHub
        </a>
    </div>
  </div>
)
