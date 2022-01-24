import './App.scss'
import React from 'react'
import {Routes, Route} from 'react-router-dom'

// import Hooks
import UseAuth from './Hooks/UseAuth'

// import Components
import TopBar from './Components/TopBar/TopBar'
import Home from './Pages/Home/Home'
import Single from './Pages/Single/Single'
import Write from './Pages/Write/Write'
import Settings from './Pages/Settings/Settings'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Public from './Routes/Public'
import Private from './Routes/Private'

function App() {
  let [token] = UseAuth()
  return (
    <>
    {token ? <TopBar/> : null}
    <Routes>
       <Route path='/' element={token ? <Home/> : <Login/>} />
      <Route path='/' element={<Public/>}>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Route>
      <Route path='/' element={<Private/>}>
        <Route path='/write' element={<Write/>} />
        <Route path='/settings' element={<Settings/>} />
        <Route path='/post/:id' element={<Single/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
