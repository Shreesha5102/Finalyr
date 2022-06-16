import React from 'react'

const LogoutButton = ({ onLogoutUserClick }) => {
  return(
      <a href="#" className="nav-link" onClick={(event) => onLogoutUserClick(event)}>Logout</a>
  )
}

export default LogoutButton
