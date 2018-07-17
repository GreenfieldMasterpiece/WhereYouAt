import React from 'react';
import NavbarItemsComponent from '../components/NavbarItemsComponent.jsx';

const NavComponent = (props) => {
  console.log('Props | NavCmpt | ', props);
  return(
    <nav className='navbar-container'>
      <NavbarItemsComponent 
        userLogin={props.userLogin}
        navItemClicked={props.navItemClicked} />
    </nav>
  )
}

export default NavComponent;