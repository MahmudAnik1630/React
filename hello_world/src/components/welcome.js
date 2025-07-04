import React, {Component} from "react";

class Welcome extends Component {
  render() {
    return (
     <h1>{this.props.name} I am welcome class component {this.props.heroname}</h1>
     
    );
  }
}
export default Welcome;
