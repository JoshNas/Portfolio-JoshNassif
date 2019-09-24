import React, { Component} from 'react'
import info from './info/info'
import "./style.css"


export class Intro extends Component{
  render() {
    return (
      <div class="jumbotron jumbotron-fluid intro-bg" id="intro">
        <div class="container text-center">
          <h1 class="display-3 text-dark">{info.name}</h1>
          <p>{info.introduction}</p>
        </div>
      </div>
    )
  }
}
