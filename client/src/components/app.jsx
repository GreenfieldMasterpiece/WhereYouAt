import React from 'react';
import axios from 'axios';
import NavComponent from '../components/NavComponent.jsx';
import HeaderComponent from '../components/HeaderComponent.jsx';
import ChatContainerComponent from '../components/ChatContainerComponent.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: true
    }
    // bind methods here
    this.navItemClicked = this.navItemClicked.bind(this);
  }

  navItemClicked(e){
    console.log('Nav Item clicked');
    this.setState({
      navItemShow: !this.state.navItemShow
    })
  }
  // use methods here

  render() {
    if(this.state.login){
      return (
        <div>
          <NavComponent 
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
