import React, { Component} from 'react'
import info from './info/info'
import "./style.css"


export class Intro extends Component{
  render() {
    return (
      <div class="jumbotron paral paralsec" id="intro">
        <div class="container text-center">
          <h1 class="display-3 text-dark">My Portfolio</h1>
          <h3 class="lead">{info.introduction}</h3>
          <btn-toolbar>
            <a href="/resources/yourcsv.txt" download>
               <button type="button" class="btn btn-info ml-1">Get CSV</button>
            </a>
            <a href="#contact">
              <button type="button" class="btn btn-info ml-1">Contact Me</button>
            </a>

          </btn-toolbar>
        </div>
      </div>
    )
  }
}
