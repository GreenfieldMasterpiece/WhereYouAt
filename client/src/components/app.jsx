import React from 'react';
import axios from 'axios';
import NavComponent from '../components/NavComponent.jsx';
import HeaderComponent from '../components/HeaderComponent.jsx';
import ChatContainerComponent from '../components/ChatContainerComponent.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
    // bind methods here
  }

  // use methods here

  render() {
    return (
      <div>
        <NavComponent /> 
        <HeaderComponent />
        <ChatContainerComponent />
      </div>
    )
  }
}

export default App
