import React from 'react';
import NavbarItemsComponent from '../components/NavbarItemsComponent.jsx';

const NavComponent = (props) => {
  return(
    <nav className='navbar-container'>
      <div className='navbar-logo'>
        <i className="fas fa-chalkboard-teacher"></i>
        <p>WhereYouAt</p>
      </div>
      <NavbarItemsComponent
        username={props.username}
        userLogin={props.userLogin}
        navItemClicked={props.navItemClicked}
        loginUser={props.loginUser}
        loggedIn={props.loggedIn}
        loginError={props.loginError}
        logout={props.logout}
        getLocation={props.getLocation}
        signUpUser={props.signUpUser}/>
    </nav>
  )
}

export default NavComponent;
