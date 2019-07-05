import React, { Component} from 'react'
import info from './info'

class Intro extends Component{
  render() {
    return (
      <div class="jumbotron jumbotron-fluid" id="intro">
        <div class="container text-center">
          <h1>My Portfolio</h1>
          <p class="text-center">{info.introduction}</p>
          <btn-toolbar>
            <button type="button" class="btn btn-info ml-1">Get CSV</button>
            <button type="button" class="btn btn-info ml-1">Contact Me</button>
          </btn-toolbar>
        </div>
      </div>
    )
  }
}

export default Intro
