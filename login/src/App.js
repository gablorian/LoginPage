import React from 'react';
import './App.scss';
import Main from "./Menu.js";
import Test from "./Login.js"
import SimpleBreadcrumbs from "./Breadcrumbs.js";
import {Route, Switch} from "react-router";
function App() {
  return (
    <div className="App">
      <Main/>
      <SimpleBreadcrumbs/>
        <Switch>

            <Route exact path="/Login" render={props => <Test {...props} />} />


        </Switch>

    </div>
  );
}

export default App;
