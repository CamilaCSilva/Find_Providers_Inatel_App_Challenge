import React, {useRef, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import './App.css';
import Capa from "./imgs/capa2.jfif"

function App() {

  const history = useHistory();
  function handleClient() {history.push("/client");}
  function handleInstaller() { history.push("/installer");}

  return (
    <div className="App">
      <img src={Capa} />
      <div className="choice">
        <h1 className="titlelogin">Find Providers</h1>
        <h2 className="title">I am a/an ...</h2>
        <button className="btloginClient" onClick={handleClient}>Client</button>
        <button className="btloginInstaller" onClick={handleInstaller}>Installer</button>
      </div>
    </div>
  );
}

export default App;
