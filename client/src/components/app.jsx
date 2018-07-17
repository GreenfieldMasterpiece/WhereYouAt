import React from 'react';
import axios from 'axios';
import NavComponent from '../components/NavComponent.jsx';
import HeaderComponent from '../components/HeaderComponent.jsx';
import ChatContainerComponent from '../components/ChatContainerComponent.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: true,
      navItemShow: false,
    }
    // bind methods here
    this.navItemClicked = this.navItemClicked.bind(this);
    this.userLogin = this.userLogin.bind(this);
  }


  navItemClicked(e){
    e.preventDefault();
    console.log('Nav Item clicked');
    this.setState({
      navItemShow: !this.state.navItemShow
    })
  }

  userLogin(e) {
    e.preventDefault();
    
    this.setState({
      login: !this.state.login
    })
  }
  // use methods here

  render() {
    if(this.state.login){
      return (
        <div>
          <NavComponent
            userLogin={this.userLogin} 
            navItemShow={this.state.navItemShow}
            navItemClicked={this.navItemClicked}
            /> 
        </div>
      )
    } else {
      return (
        <div>
          <HeaderComponent />
          <ChatContainerComponent />
        </div>
      )
    }
    
  }
}

export default App
