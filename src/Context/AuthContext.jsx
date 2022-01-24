import React, { useState, useEffect} from "react";
import { createContext } from "react";

let Context = createContext()
const AuthProvider = ({children}) =>{

    let [token, setToken] = useState(JSON.parse(window.localStorage.getItem('_blogtoken_')) || false);
    useEffect(()=>{
        window.localStorage.setItem('_blogtoken_', JSON.stringify(token))
    }, [token])

    return (
        <Context.Provider value={{token, setToken}}>{children}</Context.Provider>
    )
}

export {Context, AuthProvider}
