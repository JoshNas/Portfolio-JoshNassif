import React, { Component} from 'react'
import "./projects.css";
import { Project1 } from "./Project1"
import { Project2 } from "./Project2"
import { Project3 } from "./Project3"
import { Project4 } from "./Project4"
import { Social } from "../Social"
import businessIMG from './img/businessSite.png'
import coffeeIMG from './img/coffeeSite.png'
import booksIMG from './img/booksSite.png'


const projectOne = 'Arbitrage Finder'
const projectTwo = 'Resturant Solutions'
const projectThree = 'Optimizer'
const projectFour = 'Coffee Shop'
const projectBusiness = 'Business Website'
const projectCoffee = 'Coffee Website'
const projectBooks = 'Social Books'

const projectOneDescription = 'Application that cleans and analyzes data pulled from multiple sources to find profitable oppourtunities in a variety of markets. Utilizes Python to acquire, clean, and combine data then iterates through it to return situations where arbitrage is available.'
const projectTwoDescription = 'Complete custimizable order system for a restaurant. Employees can log in with assigned PIN and enter orders for tables and guests. Orders are saved in MySQL database with ability to be displayed in multiple locations and provide information to management.'
const projectThreeDescription = 'Utilizes Google OR-Tools to find optimal solution from thousands of possibilites. The application takes input from user, solve the problem based on the given data and parameters, then return the optimal solution.'
const projectFourDescription = 'Coffee shop app built with Python, utilizing MySQL for database management and Kivy for user interface.'
const projectBusinessDetails = 'React.js website designed for business. Built with React Router, jQuery, and Ajax. '
const projectCoffeeDetails = 'React.js website designed for coffee shop. Utilizing API Gateway and Lambda for contact.'
const projectBooksDetails = 'Signup and Log in with Amazon Cognito to track your reading progress! User data is securely stored and retrieved from DynamoDB. Additionally, each user has a private S3 bucket to which photos can be uploaded.'

const urlBusiness = "https://business.joshnassif.com"
const urlCoffee = "https://coffee.joshnassif.com"
const urlBooks = "https://books.joshnassif.com"


export class ProjectManager extends Component{
  constructor () {
    super()
    this.state = {displayMain: true, displayOne: false, displayTwo: false, displayThree: false, displayFour: false,
    learnMore: true}
  }

  /*Convert to one conditional */
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
        {/* Begin main container */}
        <div hidden={!this.state.displayMain}>
          <div className="d-flex flex-column justify-content-around">
            {/* Begin row one */}
            <div class="d-flex flex-row" id="learn-more">
              <div className="col-lg-6 text-center">
                <h3>{projectOne}</h3>
                <p>{projectOneDescription}</p>
                <button className="btn btn-info" onClick={this.toggleOne.bind(this)}>Learn More</button>
              </div>
              <div className="col-lg-6 text-center">
                <h3>{projectTwo}</h3>
                <p>{projectTwoDescription}</p>
                <button className="btn btn-info" onClick={this.toggleTwo.bind(this)}>Learn More</button>
              </div>
            </div>
            {/* End row one */}

            {/* Begin row two */}
            <div class="d-flex flex-row" id="learn-more">
              <div className="col-lg-6 text-center">
                <h3>{projectThree}</h3>
                <p>{projectThreeDescription}</p>
                <button className="btn btn-info" onClick={this.toggleThree.bind(this)}>Learn More</button>
              </div>
              <div className="col-lg-6 text-center">
                <h3>{projectFour}</h3>
                <p>{projectFourDescription}</p>
                <button className="btn btn-info" onClick={this.toggleFour.bind(this)}>Learn More</button>
              </div>
            </div>
            {/* End row two */}

            {/* Begin row three */}
            <div class="d-flex flex-row flex-wrap" id="learn-more">
              <div className="col-lg-6 text-center">
                <a href={urlBusiness} target="blank" id="link"><h3>{projectBusiness}</h3></a>
                <p>{projectBusinessDetails}</p>
                <a href={urlBusiness} target="blank">
                  <img className="img-fluid" src={businessIMG} alt={urlBusiness} id="siteImage"/>
                </a>
              </div>
              <div className="col-lg-6 text-center">
                <a href={urlCoffee} target="blank" id="link"><h3>{projectCoffee}</h3></a>
                <p>{projectCoffeeDetails}</p>
                <a href={urlCoffee} target="blank">
                  <img className="img-fluid" src={coffeeIMG} alt={urlCoffee} id="siteImage"/>
                </a>
              </div>
            </div>
            {/* End row three */}

            {/* Begin row four */}
            <div class="d-flex flex-row flex-wrap" id="learn-more">
              <div className="col-lg-6 text-center">
                <a href={urlBooks} target="blank" id="link"><h3>{projectBooks}</h3></a>
                <p>{projectBooksDetails}</p>
                <a href={urlBooks} target="blank">
                  <img className="img-fluid" src={booksIMG} alt={urlBooks} id="siteImage"/>
                </a>
              </div>
              <div className="col-lg-6 text-center">

              </div>
            </div>
            {/* End row four */}

            {this.state.displayMain && <Social />}
          </div>

        </div>
        {/* End main container */}

        {/* Toggle view to individual project */}
        {this.state.displayOne && <Project1 />}
        {this.state.displayTwo && <Project2 />}
        {this.state.displayThree && <Project3 />}
        {this.state.displayFour && <Project4 />}

        {/* Return to main display */}
        <div className="col text-center">
          <button className="btn btn-default btn-lg" onClick={this.toggleMain.bind(this)} hidden={this.state.learnMore}>Back</button>
        </div>

      </div>

    )
  }
}
