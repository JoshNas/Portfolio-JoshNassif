import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import{ Navbar} from './Navbar'
import { Home } from './Home'
import { ContactApp } from './ContactApp'
import { ProjectManager } from "./ProjectManager"
import { Footer } from './Footer'


export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/contact">
              <ContactApp />
            </Route>
            <Route path="/projects">
              <ProjectManager />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}
