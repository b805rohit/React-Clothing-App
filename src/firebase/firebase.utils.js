import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore'

//Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyBUstXN1LOfnJnE6ubaw5EN9TpCyQ4pXR0",
    authDomain: "clothing-app-36d7b.firebaseapp.com",
    databaseURL: "https://clothing-app-36d7b.firebaseio.com",
    projectId: "clothing-app-36d7b",
    storageBucket: "clothing-app-36d7b.appspot.com",
    messagingSenderId: "349108293288",
    appId: "1:349108293288:web:685d7d98e7e774b0abbc9d",
    measurementId: "G-TRR4EM2HC9"
  };

  export const createUserProfileDocuments=async (userAuth,...otherProps)=>{
    if(!userAuth) return;
    const userRef=await firestore.doc(`users/${userAuth.uid}`)
  
    const snapShot=await userRef.get()
    
    if(!snapShot.exists){
      userRef.set({
        displayName:userAuth.displayName,
        email:userAuth.email,
        createdAt:new Date(),
        ...otherProps
      })
    }

    return userRef
  }

 // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



export const auth=firebase.auth()
export const firestore=firebase.firestore()

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=()=>auth.signInWithPopup(provider)



export default firebase