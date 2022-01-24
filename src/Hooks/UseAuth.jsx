import {useContext} from 'react'
import { Context } from '../Context/AuthContext'

function UseAuth() {
    let {token, setToken} = useContext(Context)
    return [token, setToken]
}

export default UseAuth
