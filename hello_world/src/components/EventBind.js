import React, { Component } from 'react';


class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome Visitor"
    };

    this.byebye = this.byebye.bind(this);
  }


  byebye() {
    this.setState({
      message: "Bye Bye Visitor"
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        <button onClick={this.byebye} style={{ margin: "50px" }}>Click EventBind</button>
      </div>
    );
  }
}

export default EventBind;
