import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedPlant extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      location: "",
      species: ""
    };
  }

  nameHandler = event => {
    this.setState({ name: event.target.value });
    console.log("this.state.name", this.state.name);
  };

  locationHandler = event => {
    this.setState({ location: event.target.value });
    console.log("this.state.location", this.state.location);
  };

  speciesHandler = event => {
    this.setState({ species: event.target.value });
    console.log("this.state.species", this.state.species);
  };

  addPlant = () => {
    // this.props.dispatch({ type: "add-plant", value: this.state });
    this.setState({ name: "" });
    this.setState({ location: "" });
    this.setState({ species: "" });
  };

  render = () => {
    return (
      <div>
        <div>Add a a new plant</div>
        <form onSubmit={this.addPlant}>
          <input onChange={this.nameHandler} placeholder="Plant name"></input>
          <input
            onChange={this.locationHandler}
            placeholder="Plant location"
          ></input>
          <input
            onChange={this.speciesHandler}
            placeholder="Plant species"
          ></input>
          <input type="submit" value="Add plant"></input>
        </form>
      </div>
    );
  };
}

let Plant = connect()(UnconnectedPlant);

export default Plant;
