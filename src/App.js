import React, { Component } from 'react'
import { Navbar } from './Navbar'
import { Intro } from './Intro'
import { About } from './About'
import { Projects } from './Projects'
import { Social } from './Social'
import { ContactForm } from './Contact'


export class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />
        <About />
        <Projects />
        <ContactForm />
        <Social />

      </div>

    )
  }
}
