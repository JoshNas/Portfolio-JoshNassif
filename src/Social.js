import React from 'react'
import info from "./info/info"

export const Social = () => (
      <div className="container text-center" id="social-links">
          <a type="button" className="btn btn-social btn-linkedin" href={info.linkedIn} target="blank">
            <i className="fa fa-linkedin"  id="social-but"></i>
            <span > LinkedIn</span>
          </a>
          &nbsp;
          <a className="btn btn-social btn-github" href={info.github} target="blank">
            <span className="fa fa-github"  id="social-but"></span> GitHub
            </a>
      </div>
    )
