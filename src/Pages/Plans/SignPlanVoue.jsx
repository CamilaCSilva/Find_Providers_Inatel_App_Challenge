import React, {useRef, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import './SignPlan.css'

function SignPlanVoue() {
  
  const history = useHistory();
  function handleSignPlan() {
    history.push('/client/map/signVoue/installersList');
  }

  return (
    <div className="CompanyPlans">
      <header><h1>Voue Plans</h1></header>
      <div className="Company">
        <div className="PlansOrganiz">
          <div className="PA">
            <h2>Plan A</h2>
            <ul className='PlansCompany'> 
              <li><h4>Details:</h4></li>
              <ul className='PlanA'>
                <li>Data Capacity: 50MB</li>
                <li>Download Speed: 10Mbps</li>
                <li>Upload Speed: 2Mbps</li>
                <li>Description: Voluptas et quod at facilis non nisi quia.</li>
                <li>Price Per Month: R$89,90</li>
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
                <li>Download Speed: 15Mbps</li>
                <li>Upload Speed: 3.5Mbps</li>
                <li>Description: Voluptas consequatur fugit deserunt et distinctio sit sunt.</li>
                <li>Price Per Month: R$119,90</li>
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
                <li>Data Capacity: 120MB</li>
                <li>Download Speed: 20Mbps</li>
                <li>Upload Speed: 4Mbps</li>
                <li>Description: Possimus consequatur nihil eum earum debitis.</li>
                <li>Price Per Month: R$189,90</li>
                <li>Type of Internet: fiber</li>
            </ul>
          </ul>
          <button className="BtSign" onClick={handleSignPlan}>SIGN PLAN</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default SignPlanVoue;
