import React, {useState} from 'react';
import './Login.css';
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase.js";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //firebse shitt
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        //firebse shitt
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);  //means user successfully created
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
      
        <Link to='/'>
            <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
            alt='' />
        </Link>

        <div className='login_container'>

            <h1>Sign-in</h1>
            <form>
                <h5>e-mail</h5>
                <input type='text' value = {email} onChange={
                    e => setEmail(e.target.value)}
                />

                <h5>Password</h5>
                <input type='password' value = {password} onChange={
                    e => setPassword(e.target.value)}
                />

                <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
            </form>

            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

            <button type='submit' onClick={register} className='login_registerButton'>Create an account</button>

        </div>

    </div>
  )
}

export default Login
