import React, {useRef, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import './LoginPages.css';
import Capa from "./imgs/capa2.jfif"

function Installer() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  function handleEmailChange(event) { setEmail(event.target.value) }
  function handlePassChange(event) { setPass(event.target.value) }

  const history = useHistory();
  function ConfereDados(email, pass) {
    if (email === 'walkerl@gmail.com' && pass === '1234567' || email === 'allessiak@gmail.com' && pass === '345678'  || email === 'forestw@gmail.com' && pass === '987654') {
      history.push("/installer/clientsList");
    }
    else {
      alert("E-mail ou senha incorretos")
    }
  }

  function handleSignUp() {history.push("/installer/signup");}

  return (
    <div className="App">
      <img src={Capa} />
      <div className="login">
        <h1 className="titleloginInst">Find Providers</h1>
        <label>Username</label>
        <input type="text" name="name" className="username" value={email} onChange={handleEmailChange}/>
        <label>Password</label>
        <input type="password" name="name" className="pass" value={pass} onChange={handlePassChange}/>
        <button className="btlogin" onClick={() => ConfereDados(email, pass)}>Sign in</button>
        <h3 className="SignUpLabel">Want to be an installer? <a className="SignUpLink" onClick={handleSignUp}>Sign up here</a></h3>
      </div>
    </div>
  );
}

export default Installer;
