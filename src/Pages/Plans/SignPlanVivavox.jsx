import React, {useRef, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import './SignPlan.css'

function SignPlanVivavox() {
  
  const history = useHistory();
  function handleSignPlan() {
    history.push('/client/map/signVivavox/installersList');
  }

  return (
    <div className="CompanyPlans">
      <header><h1>Vivavox Plans</h1></header>
      <div className="Company">
        <div className="PlansOrganiz">
          <div className="PA">
            <h2>Plan A</h2>
            <ul className='PlansCompany'> 
              <li><h4>Details:</h4></li>
              <ul className='PlanA'>
                <li>Data Capacity: 60MB</li>
                <li>Download Speed: 15Mbps</li>
                <li>Upload Speed: 2Mbps</li>
                <li>Description: Ut facilis veniam molestiae odit illum sit.</li>
                <li>Price Per Month: R$109,90</li>
                <li>Type of Internet: fiber</li>
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
                <li>Data Capacity: 80MB</li>
                <li>Download Speed: 20Mbps</li>
                <li>Upload Speed: 3.5Mbps</li>
                <li>Description: Et provident at soluta tempore ea eligendi deleniti omnis quidem.</li>
                <li>Price Per Month: R$159,90</li>
                <li>Type of Internet: fiber</li>
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
              <li>Data Capacity: 100MB</li>
              <li>Download Speed: 30Mbps</li>
              <li>Upload Speed: 4.5Mbps</li>
              <li>Description: Accusamus praesentium blanditiis quidem voluptatum.</li>
              <li>Price Per Month: R$209,90</li>
              <li>Type of Internet: fiber</li>
            </ul>
          </ul>
          <button className="BtSign" onClick={handleSignPlan}>Sign plan</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default SignPlanVivavox;
