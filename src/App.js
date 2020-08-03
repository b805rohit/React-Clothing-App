import React from 'react';
import './App.css';
import { Switch,Route,Redirect } from 'react-router-dom'
import Homepage from "./pages/homepage/Homepage.component"
import Shoppage from './pages/shop/Shop.component'
import Header from "./components/header/header.component"
import SignIn from "./pages/sign-in-sign-up/sign-in-sign-up.component"
import { auth,createUserProfileDocuments } from "./firebase/firebase.utils"
import { setCurrentUser } from "./redux/user/user-actions"
import { connect } from "react-redux"

const Error=()=>(
  <div>
    <h1><center>Not Found</center></h1>
  </div>
)

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
            <Route exact component={Shoppage}  path="/shop"/>
            <Route exact render={()=>
              this.props.currentUser ? <Redirect to="/" /> : <SignIn /> } />
            <Route exact component={Error} path="/*" />
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
