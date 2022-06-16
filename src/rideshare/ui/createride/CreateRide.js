import React, { Component } from 'react';
import {MapComponent} from '../googlemaps/maps.js';

class CreateRide extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expected_payment: '',
      capacity: 0,
      origin_address: '',
      destination_address: '',
      confirmed_at: 0,
      depart_at: 0
    }
  }

  onExpectedPaymentChange(event) {
    this.setState({ expected_payment: event.target.value })
  }

  onCapacityChange(event) {
    this.setState({ capacity: event.target.value })
  }

  onOriginAddressChange(event) {
    this.setState({ origin_address: event.target.value })
  }

  onDestinationAddressChange(event) {
    this.setState({ destination_address: event.target.value })
  }

  onConfirmedAtChange(event) {
    this.setState({ confirmed_at: event.target.value })
  }

  onDepartAtChange(event) {
    this.setState({ depart_at: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.onCreateRideFormSubmit(this.state.expected_payment, this.state.capacity, this.state.origin_address, this.state.destination_address, this.state.confirmed_at, this.state.depart_at)
  }

  render() {

    return(
      <div className="ride-container">
        <div className="row driver">
          <div className="col"></div>
          <div className="col">
          <form id="ride-form" onSubmit={this.handleSubmit.bind(this)}>
            <fieldset>
              <legend style={{"text-align":"center"}}>Create Ride</legend>
              <div class="mb-3">
                <label for="payment" className="form-label">Expected Payment</label>
                <input id="expected_payment" className="form-control" type="text" value={this.state.expected_payment} onChange={this.onExpectedPaymentChange.bind(this)} placeholder="Expected Payment" />
              </div>
              <div class="mb-3">
                <label for="capacity" className="form-label">Capacity</label>
                <input id="capacity" type="text" className="form-control" value={this.state.capacity} onChange={this.onCapacityChange.bind(this)} placeholder="Capacity" />          
              </div>
              <div className='mb-3'>
                  <label for="Oadd" className="form-label">Origin Address</label>
                  <input id="origin_address" className="form-control" type="text" value={this.state.origin_address} onChange={this.onOriginAddressChange.bind(this)} placeholder="Origin Address" />
                </div>
                <div className='mb-3'>
                  <label for="Dadd" className="form-label">Destination Address</label>
                  <input id="destination_address" className="form-control" type="text" value={this.state.destination_address} onChange={this.onDestinationAddressChange.bind(this)} placeholder="Destination Address" />
                </div>
                <div className='mb-3'>
                  <label for="Ctime" className="form-label">Needs to be confirmed by:</label>
                  <input id="confirmed_at" type="text" className="form-control" value={this.state.confirmed_at} onChange={this.onConfirmedAtChange.bind(this)} placeholder="Confirmed At" />
                </div>
                <div className='mb-3'>
                  <label for="Dtime" className="form-label">Depart at:</label>
                  <input id="depart_at" type="text" className="form-control" value={this.state.depart_at} onChange={this.onDepartAtChange.bind(this)} placeholder="Depart At" />
                </div>
                <div className='mb-3'>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </fieldset>
          </form>
            {/* <form className="pure-form pure-form-stacked driverForm" onSubmit={this.handleSubmit.bind(this)}>
            <fieldset id="dForm">
              <div className='pure-g'>
                <div className='pure-u-1-1'>
                  <label for="payment">Expected Payment</label>
                </div>
                <div className='pure-u-1-1'>
                  <label for="capacity">Capacity</label>
                  <input id="capacity" type="text" value={this.state.capacity} onChange={this.onCapacityChange.bind(this)} placeholder="Capacity" />
                </div>
                <div className='pure-u-1-1'>
                  <label for="Oadd">Origin Address</label>
                  <input id="origin_address" type="text" value={this.state.origin_address} onChange={this.onOriginAddressChange.bind(this)} placeholder="Origin Address" />
                </div>
                <div className='pure-u-1-1'>
                  <label for="Dadd">Destination Address</label>
                  <input id="destination_address" type="text" value={this.state.destination_address} onChange={this.onDestinationAddressChange.bind(this)} placeholder="Destination Address" />
                </div>
                <div className='pure-u-1-1'>
                  <label for="Ctime">Needs to be confirmed by:</label>
                  <input id="confirmed_at" type="text" value={this.state.confirmed_at} onChange={this.onConfirmedAtChange.bind(this)} placeholder="Confirmed At" />
                </div>
                  <div className='pure-u-1-1'>
                  <label for="Dtime">Depart at:</label>
                <input id="depart_at" type="text" value={this.state.depart_at} onChange={this.onDepartAtChange.bind(this)} placeholder="Depart At" />
                </div>
                <div className='pure-u-1-1'>
                  <button type="submit" className="pure-button pure-button-primary">Create Rideshare</button>
                </div>
              </div>
            </fieldset>
            </form> */}
          </div>
          <div className="col"></div>
        </div>
        
      </div>
    )
  }
}

export default CreateRide
