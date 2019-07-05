import React, { Component} from 'react'

class Social extends Component{
  render() {
    return(
      <div className="row" id="social-links">
        <div className="container">
          <a className="btn btn-social btn-linkedin" href="https://www.linkedin.com/in/joshnassif/" target="blank">
          <span className="fa fa-linkedin"></span> LinkedIn
          </a>
          <a className="btn btn-social btn-github" href="https://www.github.com/JoshNas/" target="blank">
          <span className="fa fa-github"></span> GitHub
          </a>
        </div>
        <p></p>
      </div>
    )
  }
}

export default Social
