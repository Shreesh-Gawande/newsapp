import React, { Component } from 'react'
import logo from '../images/7011512_3520301.jpg';
import "./NavBar.css"

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">

          <div className="headingImage" >
          <img src={logo} alt="news" className="top-heading"/>
          </div>     
</nav>
<div className="news-options">
            <button className="news-category">Sports</button>
            <button className="news-category">Entairtainment</button>
            <button className="news-category">Business</button>
            <button className="news-category">Science</button>
            <button className="news-category">Health</button>
            <button className="news-category">Technology</button>
            <button className="news-category">General</button>
          </div>
      </div>
    )
  }
}

export default NavBar
