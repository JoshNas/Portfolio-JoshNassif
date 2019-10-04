import React  from 'react'
import "./projects.css";
import site from './img/CoffeeSite.png'


const project = 'Coffee Website'
const projectDetails = 'React.js website designed for coffee shop.'
const url = "https://coffee.joshnassif.com"

const style = {
  color: "#212529"
}

export const Coffee = () => (
  <div className="container">
    <a href={url} target="blank" style={style}><h3 className="col text-center">{project}</h3></a>

    <p className="col text-center lead">{projectDetails}</p>
    <a href={url} target="blank">
      <img className="img-responsive" src={site} id="siteImage" alt={url} />
    </a>

  </div>
)
