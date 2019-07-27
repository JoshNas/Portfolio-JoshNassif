import React from 'react'
import info from "./info/info"

export const Social = () => (
      <div className="container text-center" id="social-links">
        <div className="row" >
          <div className="container">
            <a type="button" className="btn btn-social btn-linkedin" href={info.linkedIn} target="blank">
              <span className="fa fa-linkedin"></span> LinkedIn
            </a>
            &nbsp;
            <a className="btn btn-social btn-github" href={info.github} target="blank">
              <span className="fa fa-github"></span> GitHub
            </a>
          </div>
        </div>
      </div>
    )
