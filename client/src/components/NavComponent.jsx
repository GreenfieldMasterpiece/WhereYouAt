import React from 'react';
import NavbarItemsComponent from '../components/NavbarItemsComponent.jsx';

const NavComponent = (props) => {

  return(
    <nav className='navbar-container'>
      <NavbarItemsComponent loginUser={props.loginUser} loggedIn={props.loggedIn}/>
    </nav>
  )
}

export default NavComponent;