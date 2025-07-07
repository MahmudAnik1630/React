import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }

  render() {

    if(this.state.isLoggedIn) {

        return (
            <div>
            <div>Hello Anik</div>
            
            </div>
        )
    }
    else{

        return (
            <div>
            <div>Hello Guest</div>
            
            </div>
        )
    }
    
    
  }
}

export default UserGreeting