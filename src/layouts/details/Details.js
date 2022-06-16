import React, { Component } from 'react'
import { Link } from 'react-router'
import RideDetails from './RideDetails'

class Details extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props);
    return(
      <main className="container">
        <div className="row">
          <div className="col">
            <RideDetails rideId={this.props.params.id}/>
          </div>
        </div>
      </main>
    )
  }
}

export default Details
