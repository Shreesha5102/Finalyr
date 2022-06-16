import React, { Component } from 'react'
import SignUpFormContainer from '../../ui/signupform/SignUpFormContainer'

class SignUp extends Component {
  render() {
    return(
      <div className="container fluid">
        <div className="row">
          <div className='col-1'></div>
          <div className="col-10">
            <div className= "signup card">
              <SignUpFormContainer />
            </div>
          </div>
          <div className='col-1'></div>
          
        </div>
      </div>
    )
  }
}

export default SignUp
