import React from 'react'
import './style.css'
import info from "./info/info"

export const Social = () => (
      <div className="container text-center" id="social-links">
          <a className="btn btn-social btn-linkedin" href={info.linkedIn} target="blank" id="social-button">
            <span className="fa fa-linkedin"  id="social-icon"></span> LinkedIn
          </a>

          <a className="btn btn-social btn-github" href={info.github} target="blank" id="social-button">
            <span className="fa fa-github"  id="social-icon"></span> GitHub
          </a>
      </div>
    )
