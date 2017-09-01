import React, { Component } from 'react';
import BG from '../images/BG.jpg';
import Arturia from '../images/Arturia.jpg';
import enoc from '../images/enoc.jpg';

export default class Gallery extends Component {

  render() {
    return (

      <div className="container-fluid">

        <h1>Gallery</h1>

        <img id="BG" src={BG} alt="" />
        <img id="Arturia" src={Arturia} alt="" />
        <img id="enoc" src={enoc} alt="" />

      </div>
    );
  }
}
