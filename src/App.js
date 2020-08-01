import React from 'react';
import './App.css';
import { Switch,Route } from 'react-router-dom'
import Homepage from "./pages/homepage/Homepage.component"
import Shoppage from './pages/shop/Shop.component'
import Header from "./components/header/header.component"
import SignIn from "./pages/sign-in-sign-up/sign-in-sign-up.component"

const Error=()=>(
  <div>
    <h1><center>Not Found</center></h1>
  </div>
)

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact component={Homepage} path="/" />
        <Route exact component={Shoppage}  path="/shop"/>
        <Route exact component={SignIn}  path="/signIn"/>
        <Route exact component={Error} path="/*" />
      </Switch>
    </div>
  );
}

export default App;
