import React, { Component} from 'react'
import profilepic from './img/profile.jpg'
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
    originalBackground: true
  }
}

changeBackground () {
  this.setState({
    originalBackground: !this.state.originalBackground
  })
}

  render() {
    return (
      <div className="jumbotron jumbotron-fluid paral" id="about" style={this.state.originalBackground ? background1 : background2} onClick={this.changeBackground.bind(this)}>
        <div className="container text-center">
          <h1 className="display-3">{info.name}</h1>
          <img src={profilepic} className="rounded-circle img-fluid" alt="profile" />
          <h1 className="display-4">{info.title}</h1>
          <h2 className="display-4">{info.specializiations}</h2>
          <p className="lead">{info.skillOne}</p>
          <p onClick={this.changeBackground.bind(this)} className="lead">{info.skillTwo}</p>
          <p className="lead">{info.skillThree}</p>
        </div>
      </div>
    )
  }
}
