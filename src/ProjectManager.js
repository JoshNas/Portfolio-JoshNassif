import React, { Component} from 'react'
import "./style.css";
import info from './info/info'
import { Project1 } from "./Project1"
import { Project2 } from "./Project2"
import { Project3 } from "./Project3"
import { Project4 } from "./Project4"
import { Social } from "./Social"


export class ProjectManager extends Component{
  constructor () {
    super()
    this.state = {displayMain: true, displayOne: false, displayTwo: false, displayThree: false, displayFour: false,
    learnMore: true}
  }

  toggleOne () {
      this.setState({
        displayMain: false,
        displayOne: true,
        displayTwo: false,
        displayThree: false,
        displayFour: false,
        learnMore: false
      })
    }

  toggleTwo () {
      this.setState({
        displayMain: false,
        displayOne: false,
        displayTwo: true,
        displayThree: false,
        displayFour: false,
        learnMore: false
      })
    }

  toggleThree () {
      this.setState({
        displayMain: false,
        displayOne: false,
        displayTwo: false,
        displayThree: true,
        displayFour: false,
        learnMore: false
      })
    }

  toggleFour () {
      this.setState({
        displayMain: false,
        displayOne: false,
        displayTwo: false,
        displayThree: false,
        displayFour: true,
        learnMore: false
      })
    }

  toggleMain () {
      this.setState({
        displayMain: true,
        displayOne: false,
        displayTwo: false,
        displayThree: false,
        displayFour: false,
        learnMore: true
      })
    }


  render() {
    return (
      <div className="jumbotron jumbotron-fluid" id="projects">
        <div className="container text-center" hidden={!this.state.displayMain}>
          <div className="row" id="projectRow">
            <div className="col-lg-6" id="learn-more">
              <h3 id="project1">{info.projectOne}</h3>
              <p>{info.projectOneDescription}</p>
              <button className="btn btn-info" onClick={this.toggleOne.bind(this)}>Learn More</button>
            </div>

            <div className="col-lg-6" id="learn-more">
              <h3>{info.projectTwo}</h3>
              <p>{info.projectTwoDescription}</p>
              <button className="btn btn-info" onClick={this.toggleTwo.bind(this)}>Learn More</button>
            </div>
          </div>

          <div className='row' id="projectRow">
            <div className="col-lg-6" id="learn-more">
              <h3>{info.projectThree}</h3>
              <p>{info.projectThreeDescription}</p>
              <button className="btn btn-info" onClick={this.toggleThree.bind(this)}>Learn More</button>
            </div>
            <div className="col-lg-6" id="learn-more">
              <h3>{info.projectFour}</h3>
              <p>{info.projectFourDescription}</p>
              <button className="btn btn-info" onClick={this.toggleFour.bind(this)}>Learn More</button>
            </div>
          </div>
          {this.state.displayMain && <Social />}
        </div>

        {this.state.displayOne && <Project1 />}
        {this.state.displayTwo && <Project2 />}
        {this.state.displayThree && <Project3 />}
        {this.state.displayFour && <Project4 />}

        <div className="col text-center"><button className="btn btn-default btn-lg" onClick={this.toggleMain.bind(this)} hidden={this.state.learnMore}>Back</button></div>


      </div>
    )
  }
}
