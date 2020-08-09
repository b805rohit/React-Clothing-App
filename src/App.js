import React from 'react';
import './App.css';
import { Switch,Route,Redirect } from 'react-router-dom'
import Homepage from "./pages/homepage/Homepage.component"
import Shoppage from './pages/shop/Shop.component'
import Header from "./components/header/header.component"
import SignIn from "./pages/sign-in-sign-up/sign-in-sign-up.component"
import { auth,createUserProfileDocuments } from "./firebase/firebase.utils"
import Checkout from "./pages/checkout/checkout.component"
import { setCurrentUser } from "./redux/user/user-actions"
import { connect } from "react-redux"


class App extends React.Component{
  unsubscribeFromAuth=null
  
  componentDidMount(){
    const {setCurrentUser}=this.props
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
    if(userAuth){   
      const userRef=await createUserProfileDocuments(userAuth)
        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
              id:snapShot.id,
            ...snapShot.data()
          })
        })
      }
      else{
        setCurrentUser(null)
      }
    })

  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
          <Header/>
          <Switch>
            <Route exact component={Homepage} path="/" />
            <Route component={Shoppage}  path="/shop"/>
            <Route exact component={Checkout} path="/checkout" />
            <Route exact render={()=>
              this.props.currentUser ? <Redirect to="/" /> : <SignIn /> } />
          </Switch>
      </div>
    );
  }
}

const mapStateToDispatch=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

const mapStateToProps=state=>({
  currentUser:state.user.currentUser
})

export default connect(mapStateToProps,mapStateToDispatch)(App);
