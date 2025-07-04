import React, { Component } from 'react';

class ClassClick extends Component {
  clickHandler = () => {
    console.log("Button Clicked");
  };

  render() {
    return (
      <div>
        <button onClick={this.clickHandler} style={{ margin: "50px" }}>
          Click Me
        </button>
      </div>
    );
  }
}

export default ClassClick;
