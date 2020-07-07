import React from 'react';
import './App.css';
import { Switch,Route } from 'react-router-dom'
import Homepage from "./pages/homepage/Homepage.component"

const Error=()=>(
  <div>
    <h1><center>Not Found</center></h1>
  </div>
)
const CheckId=(props)=>(
  <div>
    <h1>Id is:{props.match.params.id}</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact component={Homepage} path="/" />
        <Route exact component={CheckId}  path="/checkId/:id"/>
        <Route exact component={Error} path="/*" />
      </Switch>
    </div>
  );
}

export default App;
