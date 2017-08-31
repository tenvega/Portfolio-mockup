import React, {Component} from 'react';
// import Header from '../components/Header.js';
// import Footer from '../components/Footer.js';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {

  render() {
    return (

       <div className="container-fluid">
       <div className="row justify-content-center">
       <ul>
        <li>
        <button><NavLink  activeClassName="selected" to="/">Splashpage</NavLink></button>
        </li>
        <li>
        <button><NavLink  activeClassName="selected" to="/home">Home</NavLink></button>
        </li>
        <li>
        <button><NavLink  activeClassName="selected" to="/about">About</NavLink></button>
        </li>
        <li>
        <button><NavLink  activeClassName="selected" to="/portfolio">Portfolio</NavLink></button>
        </li>
        </ul>
       </div>

        {this.props.children}

      </div>
    )
  }
}
