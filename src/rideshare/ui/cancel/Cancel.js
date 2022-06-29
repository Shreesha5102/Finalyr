import React, { Component } from 'react'

class Cancel extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(event) {
    this.props.onArrivedFormSubmit(this.props.ride_number, this.props.payment);
  }

  render() {
    return(
      <button className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Cancel</button>
    )
  }
}

export default Cancel