import React, { Component } from 'react'

class ConfirmPassengersMet extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gps_location: '',
      passengers: ''
    }
  }

  onGpsLocationChange(event) {
    this.setState({ gps_location: event.target.value })
  }

  onPassengersChange(event) {
    this.setState({ passengers: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.onConfirmPassengersMetFormSubmit(this.props.ride_number, this.state.passengers, this.state.gps_location)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <legend style={{"text-align":"center"}}>Confirm Location</legend>
          <div className='mb-3'>
          <label for="gps_name" className="form-label">GPS Location</label>
          <input id="gps_location" className="form-control" type="text" value={this.state.gps_location} onChange={this.onGpsLocationChange.bind(this)} placeholder="GPS Location" />

          </div>
          <div className='mb-3'>
          <label for="passengers" className="form-label">Passengers</label>
          <textarea id="passengers" className="form-control" type="text" value={this.state.passengers} onChange={this.onPassengersChange.bind(this)} placeholder="Passengers" />
  
          </div>
          <div className='mb-3'>
            <button type="submit" className="btn btn-primary">Confirm Passenger Met</button>
          </div>
        </fieldset>
      </form>
    )
  }
}

export default ConfirmPassengersMet