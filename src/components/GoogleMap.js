import React from 'react';

class  GoogleMap extends React.Component {

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return(
      <div ref='map' />
    )
  }
}

export default GoogleMap;

//
// or
// import { GoogleMapLoader, GoogleMap } from 'react-google-maps';
// export default (props) => {
//   return(
//     <GoogleMapLoader
//       containerElement={ <div style={{height: '100%'}} /> }
//       googleMapElement={
//         <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lon}} />
//       }
//   )
// }
