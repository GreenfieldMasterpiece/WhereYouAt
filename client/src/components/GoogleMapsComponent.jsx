import React from 'react';

class GoogleMapsComponent extends React.Component {
  constructor(props){
    super(props);

    // bind methods here
  }

  // place methods here

  render(){
    return(
      <div className='google-maps-container'>
        <div className='grid-2 you-container'>
          {/* Place google maps here */}
        </div>
        <div className='grid-2 them-container'>
        {/* Place google maps here */}
        </div>
      </div>
    )
  }
}

export default GoogleMapsComponent