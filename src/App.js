import React, { useEffect, useState } from 'react';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Auth, Hub } from 'aws-amplify';
import Login from '../src/pages/Login'
import Panel from '../src/pages/Panel'

function App({ }) {
  const [currentUser, setCurrentUser] = useState()  
  
  async function signIn(email, password) {
    try {
      const user = await Auth.signIn(email, password);
      setCurrentUser(true)
    } catch (error) {
      alert(error);
    }
  }

  async function confirmSignUp(code) {
    try {
      await Auth.confirmSignUp("alan.1710470400091@faeterj-rio.edu.br", code);
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}

  async function signOut() {
    try {
      await Auth.signOut();
      setCurrentUser(false)
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  // function listener() {
  //   Hub.listen("auth", (event) => {
  //     console.log("Auth event", event);
  //     setCurrentUser(event.payload.data)
  //   })
  // }

  async function signUp(username, password) {
    // console.log(email + password);
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            // attributes: {
            //     email,          // optional
            //     phone_number,   // optional - E.164 number convention
            //     // other custom attributes 
            // },
            autoSignIn: { // optional - enables auto sign in after user is confirmed
                enabled: false,
            }
        });
        console.log(user);
    } catch (error) {
       alert(error);
    }
}

  function authStateCurrentUser() {
    Auth.currentAuthenticatedUser()
      .then((res) => {
        console.log('logado  ' +  res);
        setCurrentUser(true)
      })
      .catch((error) => {
        console.log('fora do sistema  ' + error);
        setCurrentUser(false)
      })
  }

  useEffect(() => {
    authStateCurrentUser() 
  }, [])


  return (
    <div>
      {currentUser ? <Panel signOut={signOut} /> : <Login confirmSignUp={confirmSignUp} signUp={signUp} signIn={signIn}/> }     
      {/* <button onClick={signIn}>Logar</button>  */}
    </div>
  );
}

export default App;




    // <Authenticator>
    //   {({ signOut, user }) => (
    //     <div className="App">
    //       <p>
    //         Ei {user.username}, bem vindo ao meu sistema!
    //       </p>
    //       {/* <button onClick={signOut}>Sair</button> */}
    //       {/* <div>
    //         {currentUser ? "fora do sistema" : "dentro do sistema"}
    //       </div> */}
    //       <div>
    //         {currentUser ? "fora do sistema" : "dentro do sistema"}
    //         <button onClick={() => { signOut() }}>Sair meu</button>
    //       </div>
    //     </div>
    //   )}
    // </Authenticator>