import React  from 'react'
import "./projects.css";
import site from './img/BusinessSite.png'


const project = 'Business Website'
const projectDetails = 'React.js website designed for business.'
const url = "https://business.joshnassif.com"

const style = {
  color: "#212529"
}

export const Business = () => (
  <div className="container">
    <a href={url} target="blank" style={style}><h3 className="col text-center">{project}</h3></a>
    <p className="col text-center lead">{projectDetails}</p>
    <a href={url} target="blank">
      <img className="img-responsive" src={site} id="siteImage" alt={url} />
    </a>


  </div>
)
