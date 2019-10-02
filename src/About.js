import React, { Component} from 'react'
import { Social } from './Social'
import profilepic from './img/profile.jpg'
import profilepicalt from './img/profileCool.jpg'
import info from './info/info'
import "./style.css";
import background from './img/background2.jpg'
import backgroundAlt from './img/background2Alt.gif'

const background1 = {
  backgroundImage: `url(${background})`
}

const background2 = {
  backgroundImage: `url(${backgroundAlt})`
}


export class About extends Component {
  constructor() {
    super()
    this.state = {
      originalBackground: true,
      originalProfile: true
    }
  }

  changeBackground () {
    this.setState({
      originalBackground: !this.state.originalBackground
    })
  }

  changeProfile () {
    this.setState({
      originalProfile: !this.state.originalProfile
    })
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid paral" id="about" style={this.state.originalBackground ? background1 : background2} onClick={this.changeBackground.bind(this)}>
        <div className="container text-center">
          <img src={this.state.originalProfile ? profilepic : profilepicalt} onClick={this.changeProfile.bind(this)} className="rounded-circle img-fluid" alt="profile" />
          <h1 className="display-4">{info.title}</h1>
          <h2 className="display-4">{info.specializiations}</h2>
          <p className="lead" id="skills">{info.skillOne}</p>
          <p className="lead" id="skills">{info.skillTwo}</p>
          <p className="lead" id="skills">{info.skillThree}</p>
          <Social />
        </div>
      </div>
    )
  }
}
