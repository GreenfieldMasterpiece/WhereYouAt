import React from 'react';
import FriendsListComponent from '../components/FriendsListComponent.jsx';
import ChatClientComponent from '../components/ChatClientComponent.jsx';
import GoogleMapsComponent from '../components/GoogleMapsComponent.jsx';
import axios from 'axios';

class ChatContainerComponent extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      chatArr: []
    }

    // bind methods here
    this.selectFriend = this.selectFriend.bind(this);
    this.deselectFriend = this.deselectFriend.bind(this);
    this.handleRecieveMessage = this.handleRecieveMessage.bind(this);
    
  }

  selectFriend(username) {
    axios.get(`/whereyouat/${this.props.username}/messages`)
    .then((response) => {
      let allMessages = response.data;
      console.log(allMessages);
      let favoriteMessages = [];
      for (let i = 0; i < allMessages.length; i++) {
        if (allMessages[i].fromWho === username) {
          favoriteMessages.push({
            user: allMessages[i].fromWho,
            message: allMessages[i].favoriteMessage
          });
        }
      }
      this.setState({
        chatArr: favoriteMessages
      }, () => console.log('SATE AFTER SETSTATE', this.state.chatArr));
    })
  }

  //Need to attach this to some dom click somewhere
  deselectFriend() {
    this.setState({
      chatArr: [],
    });
  }

  // use methods here

  handleRecieveMessage(dataRecievedFromServer) {
    console.log('UserInput entered: ', dataRecievedFromServer);

    let newArr = this.state.chatArr.slice();
    console.log('DATA RECEIVED FROM SERVER', dataRecievedFromServer);
    
    newArr.push(dataRecievedFromServer);


    this.setState({
      chatArr: newArr,
    })
  }

  render(){
    return(
      <div className='chat-container-component'>
        <FriendsListComponent
          username={this.props.username}
          deleteFriend={this.props.deleteFriend}
          friends={this.props.friends}
          selectFriend={this.selectFriend}/>
        <ChatClientComponent
          getUserCount={this.props.getUserCount}
          getFriends={this.props.getFriends}
          username={this.props.username}
          chatArr={this.state.chatArr}
          handleRecieveMessage={this.handleRecieveMessage}/>
        <GoogleMapsComponent
          long={this.props.long}
          lat={this.props.lat}/>
      </div>
    )
  }
}

export default ChatContainerComponent;
