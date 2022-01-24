import './Login.scss' 
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import UseAuth from '../../Hooks/UseAuth'

function Login() {

    let [token, setToken] = UseAuth()
    let [user, setUser] = useState([])

    let [userName, setUserName] = useState()
    let [userEmail, setUserEmail] = useState()

    useEffect(() =>{
        fetch('https://backendsss.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    function sinIn() {
        user.filter(f=> f.name === userName && f.email === userEmail).map(u =>{
            setToken(u.id)
        })
    }
    return (
        <div className='login'>
            <span className="login-title">
                Login
            </span>
           <form 
                onSubmit={e => {
                    e.preventDefault()
                    sinIn()
                }}
                className="login-form">
               <label>Usename</label>
               <input
                    onChange={e => setUserName(e.target.value)} 
                    className='login-input'
                    type="text" 
                    placeholder='Enter your username...' />
               <label>Email</label>
               <input 
                    onChange={e=> setUserEmail(e.target.value)}
                    className='login-input'
                    type="email" 
                    placeholder='Enter your email...' />
               <button type='submit' className="login-button">Login</button>
               <button className="login-register-button">
                   <Link 
                    to='/register'
                    className='link'
                   >
                    Register
                   </Link>
               </button>
            </form> 
        </div>
    )
}

export default Login
