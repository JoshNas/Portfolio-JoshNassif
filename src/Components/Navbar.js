import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <navbar  className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" id="nav">
        <div className="container-fluid">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/projects">Projects</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Websites
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="https://coffee.joshnassif.com">Coffee Shop</a>
                  <a className="dropdown-item" href="https://business.joshnassif.com">Small Business</a>
                  <a className="dropdown-item" href="https://books.joshnassif.com">Book Club</a>
                </div>
              </li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </navbar>
    )
  }
}