import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/App";
import Client from "./Pages/Login/Client";
import Installer from "./Pages/Login/Installer";
import Maps from "./Pages/Client/Map/Maps";
import InstallersList from "./Pages/Client/Map/InstallersList";
import ClientsList from "./Pages/Installer/ClientsList";
import SignPlanVoue from "./Pages/Plans/SignPlanVoue";
import SignPlanVivavox from "./Pages/Plans/SignPlanVivavox";
import SignPlanViasat from "./Pages/Plans/SignPlanViasat";
import SignUp from "./Pages/Registration/SignUp"

const rootElement = document.getElementById("root");
export default function () {
  return (
    <BrowserRouter> 
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/client" component={Client} />
        <Route exact path="/client/signup" component={SignUp} />
        <Route exact path="/client/map" component={Maps} />
        <Route exact path="/client/map/signVoue" component={SignPlanVoue} />
        <Route exact path="/client/map/signVivavox" component={SignPlanVivavox} />
        <Route exact path="/client/map/signViasat" component={SignPlanViasat} />
        <Route exact path="/client/map/signViasat/installersList" component={InstallersList} />
        <Route exact path="/client/map/signVoue/installersList" component={InstallersList} />
        <Route exact path="/client/map/signVivavox/installersList" component={InstallersList} />
        <Route exact path="/installer" component={Installer} />
        <Route exact path="/installer/signup" component={SignUp} />
        <Route exact path="/installer/clientsList" component={ClientsList} />
      </Switch>
    </BrowserRouter>
  );
}