import React from 'react'
import './social.css'

const linkedIn = 'https://www.linkedin.com/in/joshnassif/'
const github = 'https://www.github.com/JoshNas/'

export const Social = () => (
      <div className="container text-center" id="social-links">
          <a className="btn btn-social btn-linkedin" href={linkedIn} target="blank" id="social-button">
            <span className="fa fa-linkedin"  id="social-icon"></span> LinkedIn
          </a>

          <a className="btn btn-social btn-github" href={github} target="blank" id="social-button">
            <span className="fa fa-github"  id="social-icon"></span> GitHub
          </a>
      </div>
    )
