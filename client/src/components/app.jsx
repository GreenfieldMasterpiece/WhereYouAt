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
  }

  navItemClicked(e){
    console.log('Nav Item clicked');
    this.setState({
      navItemShow: !this.state.navItemShow
    })
  }
  // use methods here
  loginUser(username) {
    axios.post('/', username)
    .then((data) => {
      console.log(data);
      this.setState({
        user: data.username,
        friends: data.friends,
        loggedIn: true
      })
      .catch((err) => {
        //Set error message in login failure
        console.log('hi');
        console.log(err);
      })
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
