import React, { Component} from 'react'
import ModalImage from "react-modal-image";
import info from './info/info'
import "./style.css";
import projectOne1 from './img/projectOne1.png'
import projectOne2 from './img/projectOne2.png'
import projectOne3 from './img/projectOne3.png'
import projectOneBig1 from './img/projectOneBig1.png'
import projectOneBig2 from './img/projectOneBig2.png'
import projectOneBig3 from './img/projectOneBig3.png'
import projectTwo1 from './img/projectTwo1.png'
import projectTwo2 from './img/projectTwo2.png'
import projectTwo3 from './img/projectTwo3.png'
import projectTwoBig1 from './img/projectTwoBig1.png'
import projectTwoBig2 from './img/projectTwoBig2.png'
import projectTwoBig3 from './img/projectTwoBig3.png'
import projectThree1 from './img/projectThree1.png'
import projectThree2 from './img/projectThree2.png'
import projectThree3 from './img/projectThree3.png'
import projectThreeBig1 from './img/projectThreeBig1.png'
import projectThreeBig2 from './img/projectThreeBig2.png'
import projectThreeBig3 from './img/projectThreeBig3.png'

const Project1 = () => (
  <div className="container">
    <p class="lead"></p>
    <div class="row" >
      <div className="col-md-4">
        <ModalImage small={projectOne1} large={projectOneBig1} className="projectImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={projectOne2} large={projectOneBig2} className="projectImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={projectOne3} large={projectOneBig3} className="projectImage"/>
      </div>
    </div>
  </div>
)

const Project2 = () => (
  <div className="container">
    <p class="lead"></p>
    <div class="row" >
      <div className="col-md-4">
        <ModalImage small={projectTwo1} large={projectTwoBig1} className="projectImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={projectTwo2} large={projectTwoBig2} className="projectImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={projectTwo3} large={projectTwoBig3} className="projectImage"/>
      </div>
    </div>
  </div>
)

const Project3 = () => (
  <div className="container">
    <p class="lead"></p>
    <div class="row" >
      <div className="col-md-4">
        <ModalImage small={projectThree1} large={projectThreeBig1} className="projectImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={projectThree2} large={projectThreeBig2} className="projectImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={projectThree3} large={projectThreeBig3} className="projectImage"/>
      </div>
    </div>
  </div>
)


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
      <div className="jumbotron" id="projects">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-4">
              <h3 className={this.state.oneIsFocus ? "emphasized" : "normal"} id="project1">{info.projectOne}</h3>
              <p>{info.projectOneDescription}</p>
              <a href="#projects">
                <button onClick={this.toggleHiddenOne.bind(this)} className="btn btn-default btn-lg">
                            {this.state.buttonOneText}
                </button>
              </a>

            </div>
            <div className="col-lg-4">
              <h3 className={this.state.twoIsFocus ? "emphasized" : "normal"}>{info.projectTwo}</h3>
              <p>{info.projectTwoDescription}</p>
              <a href="#projects">
                <button onClick={this.toggleHiddenTwo.bind(this)} className="btn btn-default btn-lg">
                  {this.state.buttonTwoText}
                </button>
              </a>

            </div>
            <div className="col-lg-4">
              <h3 className={this.state.threeIsFocus ? "emphasized" : "normal"}>{info.projectThree}</h3>
              <p>{info.projectThreeDescription}</p>
              <a href="#projects">
                <button onClick={this.toggleHiddenThree.bind(this)} className="btn btn-default btn-lg">
                  {this.state.buttonThreeText}
                </button>
              </a>
            </div>
          </div>
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
