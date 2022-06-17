import React, { Component } from 'react'
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from './util/wrappers.js'

// UI Components
import LoginButtonContainer from './user/ui/loginbutton/LoginButtonContainer'
import LogoutButtonContainer from './user/ui/logoutbutton/LogoutButtonContainer'

// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        isNavCollapsed : true
    }
}
  handleNavCollapse = ()=> {
    this.setState(prevState => ({
      isNavCollapsed: !prevState.isNavCollapsed
    }));
  }
  render() {
    const OnlyAuthLinks = VisibleOnlyAuth(() =>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/dashboard" className="nav-link">Dashboard</a>
        </li>
        <li className="nav-item">
          <a href="/profile" className="nav-link">Profile</a>
        </li>
        <li className="nav-item">
          <a href="/driver" className="nav-link">Drive</a>
        </li>
        <li className='nav-item'>
          <LogoutButtonContainer />
        </li>
      </ul>
    )

    const OnlyGuestLinks = HiddenOnlyAuth(() =>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/signup" className="nav-link">SIGN UP</a>
        </li>
        <li className="nav-item">
          <LoginButtonContainer />
        </li>
      </ul>
    )

    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-fixed-top">
          <div className="container-fluid ">
            <span className="navbar-brand mb-0 h1" >BMSIT MR</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!this.state.isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={this.handleNavCollapse}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${this.state.isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
              <OnlyGuestLinks />
              <OnlyAuthLinks />
            </div>  
          </div>       
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;
