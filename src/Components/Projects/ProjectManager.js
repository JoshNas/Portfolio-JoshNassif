import React, { Component} from 'react'
import "./projects.css";
import { Project1 } from "./Project1"
import { Project2 } from "./Project2"
import { Project3 } from "./Project3"
import { Project4 } from "./Project4"
import { Social } from "../Social"


const projectOne = 'Arbitrage Finder'
const projectTwo = 'Resturant Solutions'
const projectThree = 'Optimizer'
const projectFour = 'Coffee Shop'

const projectOneDescription = 'Application that cleans and analyzes data pulled from multiple sources to find profitable oppourtunities in a variety of markets. Utilizes Python to acquire, clean, and combine data then iterates through it to return situations where arbitrage is available.'
const projectTwoDescription = 'Complete custimizable order system for a restaurant. Employees can log in with assigned PIN and enter orders for tables and guests. Orders are saved in MySQL database with ability to be displayed in multiple locations and provide information to management.'
const projectThreeDescription = 'Utilizes Google OR-Tools to find optimal solution from thousands of possibilites. The application takes input from user, solve the problem based on the given data and parameters, then return the optimal solution.'
const projectFourDescription = 'Coffee shop app built with Python, utilizing MySQL for database management and Kivy for user interface.'

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
              <h3 id="project1">{projectOne}</h3>
              <p>{projectOneDescription}</p>
              <button className="btn btn-info" onClick={this.toggleOne.bind(this)}>Learn More</button>
            </div>

            <div className="col-lg-6" id="learn-more">
              <h3>{projectTwo}</h3>
              <p>{projectTwoDescription}</p>
              <button className="btn btn-info" onClick={this.toggleTwo.bind(this)}>Learn More</button>
            </div>
          </div>

          <div className='row' id="projectRow">
            <div className="col-lg-6" id="learn-more">
              <h3>{projectThree}</h3>
              <p>{projectThreeDescription}</p>
              <button className="btn btn-info" onClick={this.toggleThree.bind(this)}>Learn More</button>
            </div>
            <div className="col-lg-6" id="learn-more">
              <h3>{projectFour}</h3>
              <p>{projectFourDescription}</p>
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
