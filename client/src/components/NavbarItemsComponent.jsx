import React from 'react';

class NavbarItemsComponent extends React.Component {
  constructor(props){
    console.log('NavbarItems Props | ', props);
    super(props);
    this.state = {
      userInput: ''
    } 
    // bind methods here
  }

  // place methods here

  render(){
    if(this.state.navItemShow){
      return (
        <ul className='navbar-items'>
          <li className='title'>Where You At</li>
          <li onClick={(e) => this.props.navItemClicked(e)}>Logout</li>
        </ul>
      )
    } else {
      return (
        <div className='login-container'>
          <div className='login-box'>
            <div className='login'>
              <h3>Login</h3>
            </div>
            <form action="">
              <div className='username-box'>
                <label htmlFor="">Username</label>
                <input type="text" placeholder='username'/>
              </div>
              <div className='password-box'>
                <label htmlFor="">Password</label>
                <input type="text" placeholder='password'/>
              </div>
              <div>
                <button
                  className='login-btn'
                  onClick={(e) => this.props.userLogin(e)}>Sign in</button>
              </div>
            </form>
          </div>
        </div>
      )
    }
  }
}

export default NavbarItemsComponent;