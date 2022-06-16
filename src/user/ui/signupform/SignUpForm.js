import React, { Component } from 'react';

//
import img1 from '../../../img/IMG1.jpg';

class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  onInputChange(event) {
    this.setState({ name: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.name.length < 2)
    {
      return alert('Please fill in your name.')
    }

    this.props.onSignUpFormSubmit(this.state.name)
  }

  render() {
    return(
      <div className='row'>
        <div className='col-8'>
          <img src={img1} className='img-fluid rounded' />
        </div>
        <div className='col-4'>
          <div className='row'>
            <h1 className='card-title'>Sign Up</h1>
            <p>We've got your wallet information, simply input your name and your account is made!</p>  
          </div>
          <div className='row'>
            <div className='col'>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <fieldset>
                  <div className='mb-3'>
                    <label htmlFor="name" className='form-label'>Name</label>
                    <input id="name" type="text" className='form-control' value={this.state.name} onChange={this.onInputChange.bind(this)} placeholder="Name" required/>

                  </div>
                  <button type="submit" className="btn btn-primary">Sign Up</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

export default SignUpForm
