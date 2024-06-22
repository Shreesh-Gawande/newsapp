import React, { Component } from 'react';
import logo from '../images/7011512_3520301.jpg';
import './NavBar.css';

export class NavBar extends Component {
  CategoryChange = (category) => {
    this.props.setCategory(category);
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="headingImage">
            <img src={logo} alt="news" className="top-heading"/>
          </div>
        </nav>
        <div className="news-options">
          <button className="news-category" onClick={() => this.CategoryChange('sports')}>Sports</button>
          <button className="news-category" onClick={() => this.CategoryChange('entertainment')}>Entertainment</button>
          <button className="news-category" onClick={() => this.CategoryChange('business')}>Business</button>
          <button className="news-category" onClick={() => this.CategoryChange('science')}>Science</button>
          <button className="news-category" onClick={() => this.CategoryChange('health')}>Health</button>
          <button className="news-category" onClick={() => this.CategoryChange('technology')}>Technology</button>
          <button className="news-category" onClick={() => this.CategoryChange('general')}>General</button>
        </div>
      </div>
    );
  }
}

export default NavBar;
