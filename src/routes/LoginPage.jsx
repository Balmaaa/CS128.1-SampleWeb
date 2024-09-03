import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar';

const LoginPage = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {
    
  }

  return (
    <div>
        <NavigationBar/>
        <div className={'mainContainer'}>
        <h1> Login </h1>
        <br/>
        <div>
            <input type="text" value={email} placeholder="Enter Your Email Here" onChange={(ev) => setEmail(ev.target.value)}/>
            <label className="errorLabel">{emailError}</label>
        </div>
        <br/>
        <div>
            <input type="password" value={password} placeholder="Enter Your Password Here" onChange={(ev) => setPassword(ev.target.value)}/>
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br/>
        <div>
            <button className={'Button'} type="button" onClick={onButtonClick} value={'Log in'}> Log In </button> 
        </div>
        </div>
    </div>
  )
}

export default LoginPage