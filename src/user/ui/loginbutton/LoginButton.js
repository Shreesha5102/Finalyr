import React from 'react'

const LoginButton = ({ onLoginUserClick }) => {
  return(
      <a href="#" className="nav-link " onClick={(event) => onLoginUserClick(event)}>Login</a>
  )
}

export default LoginButton
