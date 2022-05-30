import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import "./Maps.css";

const Maps = (props:any) => {
  const getMapOptions = (maps:any) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };

    const position = {
        lat: -22.253323, 
        lng: -45.704373
    };

    return (
        <div className="Map">
            <h1 className='titleMap'>Find the avaiable internet providers in your town/region</h1>
            <h5 className='discMap'>Obs: Click on the disired provider to see the avaiable plans</h5>
            <div className="map">
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCY3lkCwYQeZby0L92VkZUAkaJVv0vqEP8' }}
                center={position}
                zoom={15}
                options={getMapOptions}
                >
                
                <Marker
                    lat={-22.247033}
                    lng={-45.708446}
                    name="Vivavox"
                    color="blue"
                    label="Vivavox"
                />
                <Marker
                    lat={-22.251314}
                    lng={-45.704987}
                    name="Voue"
                    color="blue"
                    label="Voue"
                />
                <Marker
                    lat={-22.253367}
                    lng={-45.700753}
                    name="Viasat"
                    color="blue"
                    label="Viasat"
                />
                </GoogleMapReact>
            </div>
        </div>
    );
}

export default Maps;