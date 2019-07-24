import React, { Component} from 'react'
import ModalImage from "react-modal-image";
import info from './info/info'
import "./style.css";
import { Project1 } from "./Project1"
import { Project2 } from "./Project2"
import { Project3 } from "./Project3"

export class Projects extends Component{
  constructor () {
    super()
    this.state = {oneIsHidden: true, twoIsHidden: true, threeIsHidden: true,
    buttonOneText: 'Learn More', buttonTwoText: 'Learn More', buttonThreeText: 'Learn More',
    oneIsFocus: false, twoIsFocus: false, threeIsFocus: false}
  }

  toggleHiddenOne () {
    this.setState({
      oneIsHidden: !this.state.oneIsHidden, twoIsHidden:true, threeIsHidden:true,
      buttonTwoText: 'Learn More', buttonThreeText: 'Learn More',
      oneIsFocus: !this.state.oneIsFocus, twoIsFocus: false, threeIsFocus: false
    })
    switch (this.state.buttonOneText) {
      case "Learn More":
        this.setState({
          buttonOneText: "Collapse"
        })
        break;
      default:
        this.setState({
          buttonOneText: "Learn More"
        })
    }
  }

  toggleHiddenTwo () {
    this.setState({
      twoIsHidden: !this.state.twoIsHidden, oneIsHidden:true, threeIsHidden:true,
      buttonOneText: 'Learn More', buttonThreeText: 'Learn More',
      oneIsFocus: false, twoIsFocus: !this.state.twoIsFocus, threeIsFocus: false
    })
    switch (this.state.buttonTwoText) {
      case "Learn More":
        this.setState({
          buttonTwoText: "Collapse"
        })
        break;
      default:
        this.setState({
          buttonTwoText: "Learn More"
        })
    }
  }

  toggleHiddenThree () {
    this.setState({
      threeIsHidden: !this.state.threeIsHidden, oneIsHidden:true, twoIsHidden:true,
      buttonOneText: 'Learn More', buttonTwoText: 'Learn More',
      oneIsFocus: false, twoIsFocus: false, threeIsFocus: !this.state.threeIsFocus
    })
    switch (this.state.buttonThreeText) {
      case "Learn More":
        this.setState({
          buttonThreeText: "Collapse"
        })
        break;
      default:
        this.setState({
          buttonThreeText: "Learn More"
        })
    }
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid" id="projects">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-4">
              <h3 className={this.state.oneIsFocus ? "emphasized" : "normal"} id="project1">{info.projectOne}</h3>
              <p>{info.projectOneDescription}</p>
              <a  href="#focusedProject">
                <button onClick={this.toggleHiddenOne.bind(this)} className="btn btn-default btn-lg">
                            {this.state.buttonOneText}
                </button>
              </a>

            </div>
            <div className="col-lg-4">
              <h3 className={this.state.twoIsFocus ? "emphasized" : "normal"}>{info.projectTwo}</h3>
              <p>{info.projectTwoDescription}</p>
              <a href="#focusedProject">
                <button onClick={this.toggleHiddenTwo.bind(this)} className="btn btn-default btn-lg">
                  {this.state.buttonTwoText}
                </button>
              </a>

            </div>
            <div className="col-lg-4">
              <h3 className={this.state.threeIsFocus ? "emphasized" : "normal"}>{info.projectThree}</h3>
              <p>{info.projectThreeDescription}</p>
              <a  href="#focusedProject">
                <button onClick={this.toggleHiddenThree.bind(this)} className="btn btn-default btn-lg">
                  {this.state.buttonThreeText}
                </button>
              </a>
            </div>
          </div>
          <div id='hi'></div>
          <div id="focusedProject">
            {!this.state.oneIsHidden && <Project1 />}
            {!this.state.twoIsHidden && <Project2 />}
            {!this.state.threeIsHidden && <Project3 />}
          </div>
        </div>
      </div>

    )
  }
}
