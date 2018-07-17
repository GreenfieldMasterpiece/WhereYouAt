import React from 'react';

class NavbarItemsComponent extends React.Component {
  constructor(props){
    console.log('NavbarItems Props | ', props);
    super(props);
    this.state = {
      userInput: '',
      passInput: ''
    } 
    // bind methods here
    this.navItemClicked = this.navItemClicked.bind(this);
  }

  // place methods here
  navItemClicked(e){
    e.preventDefault();
    this.props.loginUser(this.state.userInput);
    this.setState({
      userInput: ''
    })
  }

  logout(e){
    this.props.logout();
  }

  render(){
    if(this.props.loggedIn){
      return (
        <ul className='navbar-items'>
          <li className='title'>Where You At</li>
          <li onClick={(e) => this.props.logout(e)}>Logout</li>
        </ul>
      )
    } else {
      return (
        <div className='login-container'>
          <div className='login-box'>
            <div className='login'>
              <h3>Login</h3>
            </div>
            <label>{this.props.loginError}</label>
            <form action="">
              <div className='username-box'>
                <label htmlFor="">Username</label>
                <input type="text" placeholder='username' 
                onChange={(e) => {
                  this.setState({
                    userInput: e.target.value
                  })
                }}
                value={this.state.userInput}/>
              </div>
              <div className='password-box'>
                <label htmlFor="">Password</label>
                <input type="text" placeholder='password' 
                onChange={(e) => {
                  let input = e.target.value.split('');
                  for (let i = 0; i < input.length; i++) {
                    input[i] = '*';
                  }
                  input = input.join('');
                  console.log(input);
                  this.setState({
                    passInput: input
                  })
                }}
                value={this.state.passInput}/>
              </div>
              <div>
                <button
                  className='login-btn'
                  onClick={(e) => this.navItemClicked(e)}>Sign in</button>
              </div>
            </form>
          </div>
        </div>
      )
    }
  }
}

export default NavbarItemsComponent;