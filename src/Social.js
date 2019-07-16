import React, { Component} from 'react'
import info from "./info/info"

export class Social extends Component{
  render() {
    return(
      <div className="container">
        <div className="row" id="social-links">
          <div className="container">
            <a type="button" className="btn btn-social btn-linkedin" href={info.linkedIn} target="blank">
              <span className="fa fa-linkedin"></span> LinkedIn
            </a>
            &nbsp;
            <a className="btn btn-social btn-github" href={info.github} target="blank">
              <span className="fa fa-github"></span> GitHub
            </a>
          </div>
          <p></p>
        </div>
      </div>
    )
  }
}
