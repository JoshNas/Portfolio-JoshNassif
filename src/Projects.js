import React, { Component} from 'react'
import info from './info'

class Projects extends Component{
  render() {
    return (
      <div className="container" id="projects">
        <div className="row">
          <div className="col-md-4">
            <h3>{info.projectOne}</h3>
            <p>{info.projectOneDescription}</p>
            <p><a href="#" className="btn btn-default btn-lg">Learn More</a></p>
          </div>
          <div className="col-md-4">
            <h3>{info.projectTwo}</h3>
            <p>{info.projectTwoDescription}</p>
            <p><a href="#" className="btn btn-default btn-lg">Learn More</a></p>
          </div>
          <div className="col-md-4">
            <h3>{info.projectThree}</h3>
            <p>{info.projectThreeDescription}</p>
            <p><a href="#" className="btn btn-default btn-lg">Learn More</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
