import React, {useState} from 'react';
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/');
      })
      .catch(error => alert(error.message));
  };
  const register = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // if successfully created a new user with email and password
        console.log(auth);
        if(auth) {
          history.push('/');
        }
      })
      .catch(error => alert(error.message));
    //some fancy firebase register happens here
  }

  return (

    <div className="login">
      <Link to='/'>
        <p className="login__logo">Art_Ug</p>
      </Link>
      <div className="login__container">
        <h1>Sign in </h1>
        <form>
          <h5>E-mail</h5>
          <input  type="text" value={email} onChange={e => setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type="password" value={password} onChange={e=> setPassword(e.target.value)}/>

          <button className="login__signInButton" type="submit" onClick={signIn}>Sign In </button>
        </form>
        <p>
          By signing in you agree to all the terms and conditions of Art-ug.
        </p>
        <button className="login__registerButton" onClick={register}>Create your account</button>
      </div>
    </div>
  )
}

export default Login;
