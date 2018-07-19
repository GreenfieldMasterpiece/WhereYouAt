import React from 'react';
import NavbarItemsComponent from '../components/NavbarItemsComponent.jsx';

const NavComponent = (props) => {
  console.log('Props | NavCmpt | ', props.username);
  return(
    <nav className='navbar-container'>
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
