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
      loggedIn: false,
      loginError: '',
      latitude: '',
      longitude: ''
    }
    // bind methods here
    this.navItemClicked = this.navItemClicked.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.getFriends = this.getFriends.bind(this);
    this.userLogin = this.userLogin.bind(this);
    this.logout = this.logout.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition((pos) => {
      var crd = pos.coords;

      let long = crd.longitude
      let lat = crd.latitude

      this.setState({
        longitude: long,
        latitude: lat
      })
    })
  }

  navItemClicked(e){
    e.preventDefault();
    this.setState({
      navItemShow: !this.state.navItemShow
    })
  }

  logout() {
    this.setState({
      login: true,
      username: '',
      friends: [],
      loggedIn: false,
      loginError: '',
    })
  }

  userLogin(e) {
    e.preventDefault();

    this.setState({
      login: !this.state.login
    })
  }
  // use methods here
  loginUser(username) {
    console.log('success');
    axios.get(`/whereyouat/${username}`)
    .then((data) => {
      this.setState({
        username: username,
        loggedIn: true,
        loginError: '',
        login: false
      })
      this.getFriends(username);
    })
    .catch((err) => {
      //Set error message in login failure
      this.setState({
        loginError: 'User not found'
      })
    })
  }

  getFriends(username) {
    axios.get(`/whereyouat/${username}/friends`)
    .then((response) => {
      let newFriends = response.data.map((friendObject) => {
        return friendObject.friend;
      });
      this.setState({
        friends: newFriends
      })
    })
  }


  render() {
    if(this.state.login){
      return (
        <div>
          <NavComponent
            username={this.state.username}
            userLogin={this.userLogin} 
            navItemShow={this.state.navItemShow}
            navItemClicked={this.navItemClicked}
            loginUser={this.loginUser}
            loggedIn={this.state.loggedIn}
            loginError={this.state.loginError}
            logout={this.logout}
            getLocation={this.getLocation}
            />
        </div>
      )
    } else {
      return (
        <div>
          <NavComponent
            userLogin={this.userLogin}
            navItemShow={this.state.navItemShow}
            navItemClicked={this.navItemClicked}
            loginUser={this.loginUser}
            loggedIn={this.state.loggedIn}
            loginError={this.state.loginError}
            logout={this.logout}
          />
          <HeaderComponent />
          <ChatContainerComponent 
            username={this.state.username}
            friends={this.state.friends}/>
        </div>
      )
    }

  }
}

export default App;
