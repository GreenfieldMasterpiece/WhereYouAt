import React from 'react';

class FriendsListComponent extends React.Component {
  constructor(props){
    super(props);
    // bind methods here
  }

  // place methods here

  render(){
    return(
      <div className='friends-list-container'>
        <h2>Friends List</h2>
        <ul>
          {this.props.friends.map((friend, i) =>
            <li key={i}>{friend}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default FriendsListComponent;