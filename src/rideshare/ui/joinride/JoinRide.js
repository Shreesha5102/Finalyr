import React, { Component } from 'react'

class JoinRide extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(event) {
    this.props.onJoinRideFormSubmit(this.props.ride_number, this.props.payment,this.props.destination);
  }

  render() {
    return(
      <button className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Join Ride</button>
    )
  }
}

export default JoinRide
