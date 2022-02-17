import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      renderMarker: {}
    };
   
    renderMarkers = () =>{
        return this.props.data.map((brand) => { //onClick={this.onMarkerClick}
            return <Marker
                    key={brand.id}
                    title = { brand.brand_name }
                    name = { brand.brand_name }
                    onClick={this.onMarkerClick}
                    position={{lat: brand.latitude, lng: brand.longitude}}
                    />
        })
    }
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {  //Default Marker code <Marker onClick={this.onMarkerClick} name={'Current location'} />
      return (
        <Map google={this.props.google}
            onClick={this.onMapClicked}
            style={{width: '100%', height: '100%', position: 'relative'}}
            className={'map'}
            initialCenter={{
            lat: 48.858093,
            lng: 2.294694
          }}
            zoom={12}
            >
            { this.renderMarkers() }
            
   
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyADTbWnFak9h9DyNE-wBKt5nrbx0-QNp5c')
  })(MapContainer)