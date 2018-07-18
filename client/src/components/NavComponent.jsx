import React from 'react';
import NavbarItemsComponent from '../components/NavbarItemsComponent.jsx';

const NavComponent = (props) => {
  console.log('Props | NavCmpt | ', props.username);
  return(
    <nav className='navbar-container'>
      <NavbarItemsComponent
<<<<<<< HEAD
=======
        username={props.username}
>>>>>>> socket-io-integration
        userLogin={props.userLogin}
        navItemClicked={props.navItemClicked}
        loginUser={props.loginUser}
        loggedIn={props.loggedIn}
        loginError={props.loginError}
        logout={props.logout}
        getLocation={props.getLocation}/>
    </nav>
  )
}

export default NavComponent;
