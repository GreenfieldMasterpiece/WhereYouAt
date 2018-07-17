import React from 'react';

class ChatClientComponent extends React.Component {
  constructor(props){
    super(props);

    // bind methods here
  }

  // place methods here

  render(){
    return(
      <div className='chat-client-container'>
        <div className='socket-chat-container'>
          { /* Place socket io box here */ }
        </div>
      </div>
    )
  }
}

export default ChatClientComponent;