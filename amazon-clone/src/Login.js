import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();    //prevent the page from refreshing

        //// firebase login stuff
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')       // if authentication is successfull it will direct to the home page
            }) 
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();////  firebase register stuff

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it will successfully create the new user with email and password
                console.log(auth);
                if (auth) {
                    history.push('/')     // we are redirecting to home page after account is registered
                }
            })
            .catch(error => alert(error.message))

    }
    return (
        <div className='login'>
            <Link to='/'>
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <forn> 
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign-in</button>
                </forn>

                <p>By signing-in you agree to AMAZON'S FAKE CLONE Condition of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className='login__registerInButton'>Create an Amazon Account</button>
            </div>





        </div>
    )
}

export default Login
