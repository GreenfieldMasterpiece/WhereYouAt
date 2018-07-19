import React from 'react';

const NavComponent = (props) => {
  return(
    <nav className='navbar-container'>
      <div className='navbar-logo'>
        <i className="fas fa-chalkboard-teacher"></i>
        <p>WhereYouAt</p>
        <li className='navbar-items' onClick={(e) => this.props.logout(e)}>Logout</li>
      </div>
    </nav>
  )
}

export default NavComponent;
