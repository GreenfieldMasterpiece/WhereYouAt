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
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe width="300" height="300" id="gmap_canvas"
            src={`https://maps.google.com/maps?q=${this.props.lat},${this.props.long}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="yes" marginheight="0" marginwidth="0">
            </iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleMapsComponent
