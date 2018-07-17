import React from 'react';
import createRef from 'createref';

class ChatClientComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: '',
      chatArr: []
    }
    this.messagesRef = createRef();
    this.socket = io();

    // bind methods here
    this.displaySocketChat = this.displaySocketChat.bind(this);
  }

  // place methods here

  componentDidMount(){
    this.socket.on('chat message', (msg) => {
      console.log('RECIEVED: ', msg);
      let newArr = this.state.chatArr.slice();
      newArr.push(msg); 

      this.setState({
        chatArr: newArr
      })
    });
  }

  displaySocketChat(e){
    e.preventDefault();

    this.socket.emit('chat message', this.state.userInput);

    // socket.on('chat message', function(msg){
    //   $('#messages').append($('<li>').text(msg));
    // });

  }

  render(){
    return(
      <div className='chat-client-container'>
        <div className='socket-chat-title-box'>
          <h2>Welcome to Live Chat</h2>
        </div>
        <div className='socket-chat-container'>
          <ul id="messages" ref={this.messagesRef}>
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