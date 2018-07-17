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
      username: '',
      friends: [],
      loggedIn: false
    }
    // bind methods here
    this.navItemClicked = this.navItemClicked.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.getFriends = this.getFriends.bind(this);
  }

  navItemClicked(e){
    this.setState({
      navItemShow: !this.state.navItemShow
    })
  }
  // use methods here
  loginUser(username) {
    axios.get(`/whereyouat/${username}`)
    .then((data) => {
      this.setState({
        user: username,
        loggedIn: true
      })
      this.getFriends(username);
    })
    .catch((err) => {
      //Set error message in login failure
      console.log(err);
    })
  }

  getFriends(username) {
    axios.get(`/${username}/friends`)
    .then(function(data) {
      console.log(data);
    })
  }


  render() {
    if(this.state.login){
      return (
        <div>
          <NavComponent 
            navItemShow={this.state.navItemShow}
            navItemClicked={this.navItemClicked}
            loginUser={this.loginUser}
            loggedIn={this.state.loggedIn}
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
