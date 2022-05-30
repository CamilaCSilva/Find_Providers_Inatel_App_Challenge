import React from 'react';
import './Marker.css';
import { useHistory } from "react-router-dom";

const Marker = (props:any) => {
    const { color, name, id } = props;
    const history = useHistory();

    const handleClick = () => {
        console.log(`You clicked ${name}`);
        if(name == 'Voue') {
            history.push("/client/map/signVoue");
        }
        else if(name == 'Vivavox') {
            history.push("/client/map/signVivavox");
        }
        else if(name == 'Viasat') {
            history.push("/client/map/signViasat");
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

export default Marker;