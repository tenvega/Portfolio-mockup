import React, {Component} from 'react';
// import Header from '../components/Header.js';
// import Footer from '../components/Footer.js';
import green from '../images/green.jpg';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {

  render() {
    return (
      <body>
       <img id="green" src={green} alt="" />
       <div className="container-fluid">
       <div className="row justify-content-center">
       <nav>
       <ul>
        <li>
        <NavLink  activeClassName="selected" to="/">Splashpage</NavLink>
        </li>
        <li>
        <NavLink  activeClassName="selected" to="/home">Home</NavLink>
        </li>
        <li>
        <NavLink  activeClassName="selected" to="/about">About</NavLink>
        </li>
        <li>
        <NavLink  activeClassName="selected" to="/portfolio">Portfolio</NavLink>
        </li>
        </ul>
        </nav>
       </div>


        {this.props.children}

      </div>
      </body>
    )
  }
}
