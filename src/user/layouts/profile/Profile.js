import React, { Component } from 'react'
import ProfileFormContainer from '../../ui/profileform/ProfileFormContainer'

class Profile extends Component {
  render() {
    return(
      <main className="container">
        <div className="row">
          <div className='col'></div>
          <div className="col">
            <h1>Profile</h1>
            <p>Edit your account details here.</p>
            <ProfileFormContainer />
          </div>
          <div className='col'></div>
        </div>
      </main>
    )
  }
}

export default Profile
