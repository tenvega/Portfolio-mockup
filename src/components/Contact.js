import React, { Component } from 'react';


export default class Contact extends Component {

  render() {
    return (

      <div className="container-fluid">

        <h1>Contact</h1>

        <form className="cardblock-group" id="addForm" >
          <div>
          <label>Name: </label>

          <input  name="userName" type="text" row = "1"  />
          </div>
          <div>
          <label>Email: </label>

          <input  name="songArtist" type="text" row = "1"  />
          </div>

          <button className="btn btn-primary" type="submit" id="formSubmitButton">Submit</button>

        </form>

      </div>
      );
    }
  }
