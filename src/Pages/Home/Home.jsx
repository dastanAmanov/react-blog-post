import './Home.scss'
import React from 'react'
import Header from '../../Components/Header/Header'
import Posts from '../../Components/Posts/Posts'
import Sidebar from '../../Components/Sidebar/Sidebar'

function Home() {
    return (
        <>
        <Header/> 
        <div className="home">
          <Posts />
          <Sidebar />
        </div>   
        </>
    )
}

export default Home
