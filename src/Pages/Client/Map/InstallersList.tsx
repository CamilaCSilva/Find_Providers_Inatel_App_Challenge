import GoogleMapReact from 'google-map-react';
import InstallerMarkers from './InstallerMarkers';
import "./Maps.css";

const InstallersList = (props:any) => {
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
            <h1 className='titleMap'>Find the avaiable installers in your town/region</h1>
            <h5 className='discMap'>Obs: Click on the disired installer to enter the wait list</h5>
            <div className="map">
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCY3lkCwYQeZby0L92VkZUAkaJVv0vqEP8' }}
                center={position}
                zoom={15}
                options={getMapOptions}
                >
                
                <InstallerMarkers
                    lat={-22.245818}
                    lng={-45.710606}
                    name="Forest Wilderman - Rating: 5 - Price: R$4/km"
                    color="red"
                    label="Forest Wilderman"
                />
                <InstallerMarkers
                    lat={-22.244554}
                    lng={-45.716213}
                    name="Myrtle Brekke - Rating: 4 - Price: R$2/km"
                    color="red"
                    label="Myrtle Brekke"
                />
                <InstallerMarkers
                    lat={-22.252542}
                    lng={-45.704366}
                    name="Alessia Keeling - Rating: 10 - Price: R$1/km"
                    color="red"
                    label="Alessia Keeling"
                />
                <InstallerMarkers
                    lat={-22.252899}
                    lng={-45.702946}
                    name="Chandler Bednar - Rating: 6 - Price: R$1/km"
                    color="red"
                    label="Chandler Bednar"
                />
                <InstallerMarkers
                    lat={-22.256111}
                    lng={-45.703818}
                    name="Walker Lesch - Rating: 3 - Price: R$1/km"
                    color="red"
                    label="Walker Lesch"
                />
                </GoogleMapReact>
            </div>
        </div>
    );
}

export default InstallersList;