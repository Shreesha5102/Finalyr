import React, { Component } from 'react'
import { Link } from 'react-router'
import CreateRideContainer from '../../rideshare/ui/createride/CreateRideContainer'

class Driver extends Component {
  render() {
    return(
      <main className="fill-window">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1 style={{"text-align":"center"}}>Driver</h1>
            <div>
              <CreateRideContainer/>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Driver
