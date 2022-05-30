import React, {useRef, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import './SignPlan.css'

function SignPlanViasat() {
  
  const history = useHistory();
  function handleSignPlan() {
    history.push('/client/map/signViasat/installersList');
  }

  return (
    <div className="CompanyPlans">
      <header><h1>Viasat Plans</h1></header>
      <div className="Company">
        <div className="PlansOrganiz">
          <div className="PA">
            <h2>Plan A</h2>
            <ul className='PlansCompany'> 
              <li><h4>Details:</h4></li>
              <ul className='PlanA'>
                <li>Data Capacity: 20MB</li>
                <li>Download Speed: 10Mbps</li>
                <li>Upload Speed: 1.5Mbps</li>
                <li>Description: Architecto reiciendis quia vel explicabo quam molestias et.</li>
                <li>Price Per Month: R$199</li>
                <li>Type of Internet: sat</li>
              </ul>
            </ul>
            <button className="BtSign" onClick={handleSignPlan}>SIGN PLAN</button>
          </div>
        </div>
        <div className="PlansOrganiz">
          <div className="PB">
            <h2>Plan B</h2>
            <ul className='PlansCompany'>
              <li><h4>Details:</h4></li>
              <ul className='PlanB'>
                <li>Data Capacity: 40MB</li>
                <li>Download Speed: 15Mbps</li>
                <li>Upload Speed: 3Mbps</li>
                <li>Description: Non assumenda voluptas nulla.</li>
                <li>Price Per Month: R$269</li>
                <li>Type of Internet: sat</li>
              </ul>
            </ul>
            <button className="BtSign" onClick={handleSignPlan}>SIGN PLAN</button>
          </div>
      </div>
      <div className="PlansOrganiz">
        <div className="PC">
          <h2>Plan C</h2>
          <ul className='PlansCompany'>
            <li><h4>Details:</h4></li>
            <ul className='PlanC'>
              <li>Data Capacity: 80MB</li>
              <li>Download Speed: 20Mbps</li>
              <li>Upload Speed: 3Mbps</li>
              <li>Description: Ut facilis veniam molestiae odit illum sit.</li>
              <li>Price Per Month: R$379</li>
              <li>Type of Internet: sat</li>
            </ul>
          </ul>
          <button className="BtSign" onClick={handleSignPlan}>SIGN PLAN</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default SignPlanViasat;
