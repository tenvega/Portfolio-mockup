import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import BG from '../images/BG.jpg';
import Arturia from '../images/Arturia.jpg';
import enoc from '../images/enoc.jpg';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">

        <div >

          <h1>React Portfolio App</h1>
          <img id="BG" src={BG} alt="" />
          <img id="Arturia" src={Arturia} alt="" />
          <img id="enoc" src={enoc} alt="" />



        </div>


      </div>
    );
  }
}
// <img src={logo} className="App-logo" alt="logo" />
export default App;
