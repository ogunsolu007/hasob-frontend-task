import React from 'react'
import Login from "./components/pages/Login"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"
import Userprofile from './components/pages/Userprofile';
import Assets from './components/pages/Assets';
import Dashboard from './components/pages/Dashboard';
import Assetmain from './components/pages/Assetmain';
import Users from "./components/pages/Users"


function App() {
  return (
    <>
      <Router>
      
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/Userprofile" component={Userprofile} />
          <Route path="/Assets" component={Assetmain} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Users" component={Users} />
        </Switch>
      </Router>
    </>
  )

}

export default App;
