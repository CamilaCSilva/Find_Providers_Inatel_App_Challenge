import React from 'react';
import './Marker.css';
import { useHistory } from "react-router-dom";

const InstallerMarker = (props:any) => {
    const { color, name, id } = props;
    const history = useHistory();

    const handleClick = () => {
        console.log(`You clicked ${name}`);
        if(name == 'Forest Wilderman - Rating: 5 - Price: R$4/km') {
          alert("You are now in Forest's list!                                                             In case of an emergency call: (35)97549-1239");
        }
        else if(name == 'Myrtle Brekke - Rating: 4 - Price: R$2/km') {
          alert("You are now in Myrtle's list!                                                             In case of an emergency call: (35)97749-8237");
        }
        else if(name == 'Alessia Keeling - Rating: 10 - Price: R$1/km') {
          alert("You are now in Alessia's list!                                                            In case of an emergency call: (35)97979-8677");
        }
        else if(name == 'Chandler Bednar - Rating: 6 - Price: R$1/km') {
          alert("You are now in Chandler's list!                                                           In case of an emergency call: (35)97876-8864");
        }
        else if(name == 'Walker Lesch - Rating: 3 - Price: R$1/km') {
          alert("You are now in Walker's list!                                                             In case of an emergency call: (35)92810-3786");
        }
    };

    
    return (
      <div>
        <div
          className="pin bounce" onClick={handleClick} 
          style={{ backgroundColor: color, cursor: 'pointer' }}
          title={name} 
        />
        <div className="pulse" />
      </div>

    );
  };

export default InstallerMarker;