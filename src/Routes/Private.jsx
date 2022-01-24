import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UseAuth from '../Hooks/UseAuth'

function Private() {

    let [token] = UseAuth()

    if(token){
        return <Outlet />
    }
    return <Navigate to='/login'/>
}

export default Private
