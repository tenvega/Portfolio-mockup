import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/App.css';


export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">

    <h1>Web Developer / Musician/Audio Engineer / Electronic Music Enthusiast </h1>
        <div className = "skills">
   <div className = "grey">
          <h2>Back End / Front End</h2>
          <label>HTML</label>
          <label>CSS</label>
          <label>JSS</label>
          <label>REACT</label>
          <label>NODEJS</label>
          <label>MONGO DB</label>
          <label>PSQL</label>
          <label>GIT</label>
    </div>

          <h2>Audio / Music Production</h2>

          <label>Ableton</label>
          <label>Native Intruments</label>
          <label>Logic Pro</label>
          <label>Pure Data</label>
          <label>Mixing</label>
          <label>Mastering</label>
          <label>Studio Musician</label>
          <label>Bass Player</label>
        </div>
        </div>

    );
  }
}
