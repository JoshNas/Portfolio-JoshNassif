import React  from 'react'
import info from './info/info'
import "./style.css";


export const ProjectsAll = () => (
  <div className="container text-center">
    <div className="row">

      <div className="col-lg-4">
        <h3 id="project1">{info.projectOne}</h3>
        <p>{info.projectOneDescription}</p>
      </div>

      <div className="col-lg-4">
        <h3>{info.projectTwo}</h3>
        <p>{info.projectTwoDescription}</p>
      </div>

      <div className="col-lg-4">
        <h3>{info.projectThree}</h3>
        <p>{info.projectThreeDescription}</p>
      </div>
    </div>
  </div>
)
