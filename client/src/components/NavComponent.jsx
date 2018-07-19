import React from 'react';

const NavComponent = (props) => {
  console.log('props:' , props);
  return(
    <nav className='navbar-container'>
      <div className='navbar-logo'>
        <i className="fas fa-chalkboard-teacher"></i>
        <p>WhereYouAt</p>
        <li style={props.removeLogoutBtn ? { display: 'block' } : { display: 'none' }}
          className='navbar-items' 
          onClick={(e) => props.logout(e)}>Logout</li>
      </div>
    </nav>
  )
}

export default NavComponent;
