import React from 'react';
import '../scss/App.scss';
import Main from "./Menu.js";
import Test from "./Login.js"
import About from "./About.js"
import Buy from "./Buy.js"
import Sell from "./Sell.js"
import Register from "./Register.js"
import SimpleBreadcrumbs from "./Breadcrumbs.js";
import {Route, Switch} from "react-router";
import Forgot from "./Forgot.js";
import Footer from "./Footer.js";
function App() {
  return (
    <div className="App">
      <Main/>
      <SimpleBreadcrumbs/>
        <Switch>
            <Route exact path="/Login" render={props => <Test {...props} />} />
            <Route exact path="/Buy" render={props => <Buy {...props} />} />
            <Route exact path="/About" render={props => <About {...props} />} />
            <Route exact path="/Sell" render={props => <Sell {...props} />} />
            <Route exact path="/Register" render={props => <Register {...props} />} />
            <Route exact path="/Login/Forgot" render={props => <Forgot {...props} />} />
        </Switch>
<Footer/>
    </div>
  );
}

export default App;
