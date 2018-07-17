import React from 'react';
import NavbarItemsComponent from '../components/NavbarItemsComponent.jsx';

const NavComponent = (props) => {
  console.log('Props | NavCmpt | ', props);
  return(
    <nav className='navbar-container'>
      <NavbarItemsComponent 
        userLogin={props.userLogin}
        navItemClicked={props.navItemClicked}
        loginUser={props.loginUser}
        loggedIn={props.loggedIn}
        loginError={props.loginError}
        logout={props.logout} />
    </nav>
  )
}

export default NavComponent;