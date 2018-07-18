import React from 'react';
import io from 'socket.io-client';

class ChatClientComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: '',
      chatArr: []
    }
    this.socket = io();

    // bind methods here
    this.displaySocketChat = this.displaySocketChat.bind(this);
    this.handleMessages = this.handleMessages.bind(this);
    
    // listens to chat message event coming from server
    this.socket.on('chat message', this.handleMessages);
  }

  // place methods here


  handleMessages(userInput) {
    console.log('userInput SENT: ', userInput);
    let newArr = this.state.chatArr.slice();
    
    newArr.push(userInput.message);

    this.setState({
      chatArr: newArr
    })
  }

  // click event for sending data to server
  displaySocketChat(e){
    e.preventDefault();

    // user input state was already changed in onChange
    // emit a chat message from your client to your server with the obj
    this.socket.emit('chat message', {
      message: this.state.userInput
    });
    this.handleMessages({
      message: this.state.userInput
    });
    //listen for events coming back from server
  }

  render(){
    return(
      <div className='chat-client-container'>
        <div className='socket-chat-title-box'>
          <h2>Welcome to Live Chat</h2>
        </div>
        <div className='socket-chat-container'>
          <ul id="messages">
            {this.state.chatArr.map((chat, i) =>
              <li key={i}>{this.props.username}: {chat}</li>
            )}
          </ul>
        </div>
        <form action="" onSubmit={this.displaySocketChat}>
          <input
            onChange={(e) => this.setState({userInput: e.target.value})}
            id="messageInput" 
            placeholder='type message' 
            autoComplete="off" 
            required type='text' 
          />
        </form>
      </div>
    )
  }
}

export default ChatClientComponent;