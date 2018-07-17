import React from 'react';

class ChatClientComponent extends React.Component {
  constructor(props){
    super(props);

    // bind methods here
    this.displaySocketChat = this.displaySocketChat.bind(this);
  }

  // place methods here

  displaySocketChat(){

  }

  componentDidMount(){

  }

  render(){
    return(
      <div className='chat-client-container'>
        <div className='socket-chat-title-box'>
          <h2>Welcome to Live Chat</h2>
        </div>
        <div className='socket-chat-container'>
          <ul id="messages"></ul>
            <form action="">
              <input id="messageInput" placeholder='type message' autoComplete="off" required type='text' />
            </form>
        </div>
      </div>
    )
  }
}

export default ChatClientComponent;