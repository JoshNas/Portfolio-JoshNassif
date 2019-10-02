import React, { Component } from 'react'
import { Intro } from './Intro'
import { About } from './About'



export class Home extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <About />
      </div>
    )
  }
}
