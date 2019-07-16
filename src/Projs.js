import React, { Component} from 'react'
import ModalImage from "react-modal-image";
import info from './info/info'
import "./style.css";
import projectOne1 from './img/projectOne1.png'
import projectOne2 from './img/projectOne2.png'
import projectOne3 from './img/projectOne3.png'
import projectOneBig1 from './img/projectOneBig1.png'
import projectOneBig2 from './img/projectOneBig2.png'
import projectOneBig3 from './img/projectOneBig3.png'
import projectTwo1 from './img/projectTwo1.png'
import projectTwo2 from './img/projectTwo2.png'
import projectTwo3 from './img/projectTwo3.png'
import projectTwoBig1 from './img/projectTwoBig1.png'
import projectTwoBig2 from './img/projectTwoBig2.png'
import projectTwoBig3 from './img/projectTwoBig3.png'
import projectThree1 from './img/projectThree1.png'
import projectThree2 from './img/projectThree2.png'
import projectThree3 from './img/projectThree3.png'
import projectThreeBig1 from './img/projectThreeBig1.png'
import projectThreeBig2 from './img/projectThreeBig2.png'
import projectThreeBig3 from './img/projectThreeBig3.png'

export const Project1 = () => (
  <div className="container">
    <p class="lead"></p>
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
  </div>
)

export const Project2 = () => (
  <div className="container">
    <p class="lead"></p>
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
  </div>
)

export const Project3 = () => (
  <div className="container">
    <p class="lead"></p>
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
  </div>
)
