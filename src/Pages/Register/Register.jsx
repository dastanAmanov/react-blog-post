import './Register.scss' 
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// import Hooks
import UseAuth from '../../Hooks/UseAuth'

function Register() {
    let [token, setToken] = UseAuth()
    console.log(token);
    let [name, setName] = useState('')
    let [surname, setSurname] = useState('')
    let [email, setEmail] = useState('')
    let [address, setAddress] = useState('')
    async function user() {
        let response = await fetch(`https://backendsss.herokuapp.com/users`,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            surname: surname,
            address: address
        })
    })
    let data = await response.json()
    setToken(data[0].id)
}
return (
    <div className='register'>
    <span className="register-title">
    Register
    </span>
    <form 
    onSubmit={(e)=>{
        e.preventDefault()
        user()}}
        className="register-form"
        >
        <label>Username</label>
        <input 
        onChange={e => setName(e.target.value)}
        className='register-input'
        type="text" 
        placeholder='Enter your username...' 
        required
        />
        <label>Surname</label>
        <input 
        onChange={e => setSurname(e.target.value)}
        className='register-input'
        type="text" 
        placeholder='Enter your surname...' 
        required
        />
        <label>Email</label>
        <input
        onChange={e => setEmail(e.target.value)}
        className='register-input'
        type="email" 
        placeholder='Enter your email...' 
        required
        />
        <label>Address</label>
        <input 
        onChange={e => setAddress(e.target.value)}
        className='register-input'
        type="text" 
        placeholder='Enter your address...' 
        required
        />
        <button className="register-button">Register</button>
        <button className="register-login-button">
        <Link 
        to='/login' 
        className='link'>
        Login
        </Link>
        </button>
        </form> 
        </div>
        )
    }
    
    export default Register
    