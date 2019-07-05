import React, { Component} from 'react'
import profilepic from './img/kayak.jpg'
import info from './info'


class About extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid" id="about">
        <div className="container">
          <h1 className="text-center">{info.name}</h1>
          <div className="text-center">
              <img src={profilepic} className="rounded-circle" alt="profile picture" />
          </div>
          <h1 class="text-center">{info.title}</h1>
          <h2 class="text-center">{info.specializiations}</h2>
          <div class="text-center">
              <p class="lead">{info.skillOne}</p>
              <p class="lead">{info.skillTwo}</p>
              <p class="lead">{info.skillThree}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
