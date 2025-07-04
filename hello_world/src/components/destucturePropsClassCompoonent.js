import React, { Component } from 'react';

class DestucturePropsClassComponent extends Component {
  constructor(props) {
    super(props);

    // Initialize internal state
    this.state = {
      heroname: 'superman' // Default value for heroname
    };
  }

  render() {
    const { name } = this.props;
    const { heroname } = this.state;

    return (
      <div>
        <h1>
          Heheh boy you are {name} and you are {heroname}
        </h1>
      </div>
    );
  }
}

export default DestucturePropsClassComponent;
