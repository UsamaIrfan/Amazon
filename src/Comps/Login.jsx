import React from 'react'
import {Link, useHistory } from 'react-router-dom'
import '../Styles/Login.css';
import {auth} from '../Config/Firebase';
import {useState} from 'react';

function Login() {
   const history = useHistory()
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [err, setErr] = useState(null);

   const login = e => {
      e.preventDefault();
      // login Logic
      auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
         // Logged in redirect to homepage
         history.push('/')
      })
      .catch((err) => setErr(err.message)) 
   }

   const register = e => {
      e.preventDefault();
      // Register Logic
      auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
         // created new user and logged in
         history.push('/');
      })
      .catch((err) => setErr(err.message))
   }

   return (
      <div className="login">
         <Link to="/">
            <img className="login__logo" src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png" alt="Login Logo Amazon"/>
         </Link>
         <div className="login__container">
            <h1>Sign In</h1>
            <p>You cannot Register a new Product without Signing In</p>
            <form>
               <h5>Email</h5>
               <input value={email} onChange={e => setEmail(e.target.value)} type="email"/>
               <h5>Password</h5>
               <input value={password} onChange={e => setPassword(e.target.value)} type="password"/>
               <button onClick={login} className="login__signInButton">Sign In</button>
               <p>By signing in you agree to the Amazon Clone's terms and conditions of Use & Sale. By signing in you also agree to our Use Of Cookies Terms & Conditions.</p>
               <button onClick={register} className="login__regButton">Create Your Amazon Account.</button>
               {err && <p className="login__err">{err}</p>}
            </form>
         </div>
      </div>
   )
}

export default Login
