import React, {useState} from 'react'
import {NavLink, useNavigate} from "react-router-dom"
import '../Styles/Login.css'
import {auth} from "../firebase"

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                navigate('/')
                console.log(auth);
            })
            .cath(error => alert(error.message))
    }
// mauricioarizaca@gmail
// arizaca13
    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                console.log(auth);
                if (auth){
                    navigate('/');
                    // navigate.push('/')
                }
            })
            .cath(error => alert(error.message))
        //some fancy firebase shitttt
    }
  return (
    <div className='login'>
        <NavLink to='/'>
            <img 
            alt='amazonlogologin'
            className='login__logo'
            src='https://pngimg.com/uploads/amazon/amazon_PNG1.png'/>
        </NavLink>
        <div className="login__container">
            <h1>Sign-in</h1>

            <form action="">
                <h5>E-mail</h5>
                <input type='text' value={email} onChange=
                {e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} 
                onChange={e => setPassword(e.target.value)} />

                <button 
                type='submit'
                onClick={signIn}
                className='login__signInButton'>Sign In</button>
            </form>

            <p>
                By signin-in you agree to the AMAZON FAKE CLONE Condition of Use & Sale. Please see our Privacy Notice, our Cookies Notices AND ORUR iNTEREST-bASED aDS Notice
            </p>

            <button 
            onClick={register}
            className='login__registerButton'>Create your Amazon account</button>
        </div>
    </div>
  )
}

export default Login