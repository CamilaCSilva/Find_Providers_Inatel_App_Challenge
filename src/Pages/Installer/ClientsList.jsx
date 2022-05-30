import React, {useRef, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import '../Login/App.css';
import './ClientsList.css'

function ClientsList() {

  const history = useHistory();
  function handleContacted(){
    alert('Client contacted successfully!');
  }

  return (
    <div className="ClientsList">
      <header><h1 className="titleClientsList">Clients Wait List</h1></header>
      <table className="clientsTable">
        <tr>
          <th>Name</th>
          <th>Contact Number</th>
          <th>Ordered</th>
          <th>Contacted</th>
        </tr>
        <tr>
          <td>Camila de Cássia Silva</td>
          <td>(35)99868-7542</td>
          <td>3 days ago</td>
          <td><button onClick={handleContacted} className="Confirm">OK</button></td>
        </tr>
        <tr>
          <td>Renzo Paranaíba Mesquita</td>
          <td>(35)99865-2456</td>
          <td>5 days ago</td>
          <td><button onClick={handleContacted} className="Confirm">OK</button></td>
        </tr>
        <tr>
          <td>Christopher Lima</td>
          <td>(35)96446-7765</td>
          <td>1 month ago</td>
          <td><button onClick={handleContacted} className="Confirm">OK</button></td>
        </tr>
        <tr>
          <td>Marcelo Cysneiros</td>
          <td>(11)92678-8763</td>
          <td>1 min ago</td>
          <td><button onClick={handleContacted} className="Confirm">OK</button></td>
        </tr>
      </table>
    </div>
  );
}

export default ClientsList;
