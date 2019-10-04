import React from 'react'
import ModalImage from "react-modal-image";
import "./projects.css";
import names from './img/RestaurantNames.png'
import pin from './img/RestaurantPIN.png'
import orders from './img/RestaurantOrder.png'
import namesBig from './img/RestaurantNamesBig.png'
import pinBig from './img/RestaurantPINBig.png'
import ordersBig from './img/RestaurantOrderBig.png'

const projectTwo = 'Resturant Solutions'
const projectTwoDetails = 'Complete custimizable order system for a restaurant. Employees can log in with assigned PIN and enter orders for tables and guests. Orders are saved in MySQL database with ability to be displayed in multiple locations and provide information to management'

export const Project2 = () => (
  <div className="container">
    <h3 className="col text-center">{projectTwo}</h3>
    <p className="col text-center lead">{projectTwoDetails}</p>
    <div class="row" >
      <div className="col-md-4">
        <ModalImage small={names} large={namesBig} className="projectImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={pin} large={pinBig} className="projectImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={orders} large={ordersBig} className="projectImage"/>
      </div>
    </div>
    <div className="container text-center" id="social-links">
        <a className="btn btn-social btn-github" href="https://github.com/JoshNas/Resturant" target="blank" id="social-button">
          <span className="fa fa-github"  id="social-icon"></span> GitHub
        </a>
    </div>
  </div>
)
