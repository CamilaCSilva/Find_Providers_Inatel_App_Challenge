import React, {useRef, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import './Registration.css';
import Capa from "../Login/imgs/capa2.jfif";

function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [city, setCity] = useState('')
  const [rg, setRg] = useState('')
  const [cpf, setCpf] = useState('')
  const [phone, setPhone] = useState('')

  function handleNameChange(event) { setName(event.target.value) }
  function handleEmailChange(event) { setEmail(event.target.value) }
  function handlePassChange(event) { setPass(event.target.value) }
  function handleCityChange(event) { setCity(event.target.value) }
  function handleRgChange(event) { setRg(event.target.value) }
  function handleCpfChange(event) { setCpf(event.target.value) }
  function handlePhoneChange(event) { setPhone(event.target.value) }

  const history = useHistory();
  function ConfereDados(name, rg, cpf, phone, pass) {
    if(name.length>8 , rg.length>=13 , cpf>=11 , phone.length>=11 , pass.length>6){
        alert('Successfully Registered!');
        history.push("/");
    }
    else {
        alert('Incorrect or Missing information!')
    }
  }

  return (
    <div className="App">
        <img src={Capa} />
        <div className="login">
            <h1 className="titlePage">Find Providers</h1>
            <h2 className="titleReg">Register</h2>
            <div className="signUp">
                <label>Full Name</label>
                <input type="text" name="name" className="username" value={name} onChange={handleNameChange}/>
                <div className="documents">
                    <label>RG</label>
                    <input type="text" name="name" className="rg" value={rg} onChange={handleRgChange}/>
                    <label>CPF</label>
                    <input type="text" name="name" className="cpf" value={cpf} onChange={handleCpfChange}/>
                </div>
                <div className="Location">
                    <div className="LocationOrganiz">
                        <label>Country</label>
                        <select className="Countries">
                            <option value=''>Countries</option>
                            <option value='BR'>Brazil</option>
                            <option value='USA'>United States</option>
                            <option value='CH'>China</option>
                        </select>
                    </div>

                    <div className="LocationOrganiz">
                        <label>Region</label>
                        <select className="Regions">
                            <option value=''>States</option>
                            <option value='AC'>AC</option>
                            <option value='AL'>AL</option>
                            <option value='BA'>BA</option>
                            <option value='CE'>CE</option>
                            <option value='DF'>DF</option>
                            <option value='MG'>MG</option>
                            <option value='SP'>SP</option>
                            <option value='RJ'>RJ</option>
                            <option value='RS'>RS</option>
                        </select>
                    </div>
                </div>
                <label>City/Town</label>
                <input type="text" name="name" className="city" value={city} onChange={handleCityChange}/>
                <label>Contact Number</label>
                <input type="text" name="name" className="phoneNumber" value={phone} onChange={handlePhoneChange}/>
                <label>Email</label>
                <input type="text" name="name" className="email" value={email} onChange={handleEmailChange}/>
                <label>Password</label>
                <input type="password" name="name" className="pass" value={pass} onChange={handlePassChange}/>
            </div>
            <button className="btlogin" onClick={() => ConfereDados(name, rg, cpf, phone, pass)}>Sign up</button>
        </div>
    </div>
  );
}

export default SignUp;
