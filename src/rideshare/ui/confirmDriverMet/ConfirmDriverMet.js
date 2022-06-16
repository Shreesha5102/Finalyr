import React, { Component } from 'react'

class ConfirmDriverMet extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gps_location: ''
    }
  }

   
  
   
  onGpsLocationChange(event) {
    this.setState({ gps_location: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.onConfirmDriverMetFormSubmit(this.props.ride_number, this.state.gps_location)
  }
  
  render() {
    // var t= this.routeMap()
    return(
      <div>
        
      <form onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <legend style={{"text-align":"center"}}>Confirm Location</legend>
          <div className='mb-3'>
            <label for="gps_name" className="form-label">GPS Location</label>
            <input id="gps_location" className="form-control" type="text" value={this.state.gps_location} onChange={this.onGpsLocationChange.bind(this)} placeholder="GPS Location" />
          </div>
          <div className='mb-3'>
            <button type="submit" className="btn btn-primary">Confirm Driver Met</button>
          </div>
        </fieldset>
      </form>
      </div>
    )
  }
}

export default ConfirmDriverMet