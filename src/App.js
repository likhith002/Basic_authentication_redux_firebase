import React from 'react';

import './App.css';

import { auth, provider } from './firebase';
import { useDispatch, useSelector } from 'react-redux'
import { setuser, setuserlogout, selectusername, selectuseremail } from './features/UserSlice'
import { signInWithPopup,signOut } from "firebase/auth"


function App() {

  const dispatch = useDispatch()
  const username = useSelector(selectusername)
  const useremail = useSelector(selectuseremail)


  const signout = () => {

    
    signOut(auth).then(() => {
      // Sign-out successful.

      dispatch(setuserlogout())

    }).catch((error) => {
      // An error happened.
    });
  }

  const signin = () => {

    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
   dispatch(setuser({
     username:result.user.displayName,
     useremail:result.user.email
   }))
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
  
    // ...
  });
  }
  return (
    <div className="App">

      {
        username ? (
          <button onClick={signout}>Sign Out</button>
        ) :
          (
            <button onClick={signin}> Sign In</button>
          )
      }

    </div>
  );
}

export default App;
