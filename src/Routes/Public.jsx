import React from 'react'
import {Outlet, Navigate, useLocation} from 'react-router-dom'
import UseAuth from '../Hooks/UseAuth'

function Public() {
    let [token] = UseAuth()
    let {pathname} = useLocation()
    
    if(token && pathname === '/login' || token && pathname === '/register'){
        return <Navigate to='/'/>
    }
    return <Outlet />
}

export default Public