import React, { Component } from 'react'

 class UserGreetingUsingVar extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }


  render() {

    let message;
    if (this.state.isLoggedIn) {
      message = <div>Hello Anik</div>
    } else {
      message = <div>Hello Guest</div>
    }




    return (
      <div>{message}</div>
    )
  }
}

export default UserGreetingUsingVar