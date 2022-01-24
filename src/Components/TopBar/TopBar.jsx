import './TopBar.scss'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UseAuth from '../../Hooks/UseAuth'

function TopBar() {
    let [token] = UseAuth()

    let [search, setSearch] = useState(false)
    let [menuOpen, setMenuOpen] = useState(false)
    let [exit, setExit] = useState(false)
    return (
        <div className='top'>
            <div className="top-left">
                <i className="fab fa-facebook-square top-icon"></i>
                <i className="fab fa-twitter-square top-icon"></i>
                <i className="fab fa-pinterest-square top-icon"></i>
                <i className="fab fa-instagram-square top-icon"></i>
            </div>
            <div className="top-center">
                <ul className="top-list">
                    <li className="top_list-item">
                        <Link className='link' to='/'>home</Link>
                    </li>
                    <li className="top_list-item">
                        about
                    </li>
                    <li className="top_list-item">
                        contact
                    </li>
                    <li className="top_list-item">
                        <Link className='link' to='/write'>write</Link>
                    </li>
                    <li onClick={() => exit ? setExit(false) : setExit(true)} 
                        className="top_list-item">
                        logout
                    </li>
                </ul>
            </div>
            <dialog open={exit} className='top-exit-modal'>
                <div className="top-exit-content">
                <p>Do you really exit ?</p>
                <div className="top-exit-btn">
                    <span onClick={()=> setExit(false)}>
                        Cancel
                    </span>
                    <button 
                        onClick={() =>{ 
                            window.localStorage.removeItem('_blogtoken_')
                            setTimeout(()=>{
                                window.location.reload()
                            }, 1000)
                        }}
                    >
                        Exit 
                    </button>
                </div>
                </div>
            </dialog>
            <div className="top-right">
                <Link title="Profile" to='/settings'>
                    <img className='top_img' src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width='100' alt="" />
                </Link>
                <div className='top-right-search'>
                    <i  onClick={()=> search ? setSearch(false) : setSearch(true)}
                        className="fas fa-search top_search-icon">
                    </i>
                    <form className='top-right-form'>
                        <input 
                            className={search === true ? 'top-right-input top-active' : 'top-right-input'}
                            type="search" 
                            placeholder='search' />
                    </form>
                </div>
            </div>
            <button onClick={()=> setMenuOpen(true)}
                className="menu-burger">
                <i className="fas fa-bars menu-open"></i>
            </button>
            <div className={menuOpen === true ? "menu-bar-mobile menu-bar-mobile-active" : "menu-bar-mobile"}>
                <ul className="menu-list">
                <div className="menu-bar-icon">
                    <i className="fab fa-facebook-square top-icon"></i>
                    <i className="fab fa-twitter-square top-icon"></i>
                    <i className="fab fa-pinterest-square top-icon"></i>
                    <i className="fab fa-instagram-square top-icon"></i>
                </div>
                <button 
                    onClick={()=> setMenuOpen(false)}
                    className='menu-bar-close'>
                        &times;
                </button>
                    <li 
                        onClick={()=> setMenuOpen(false)}
                        className="menu-list-item">
                        <Link className='link' to='/'>home</Link>
                    </li>
                    <li className="menu-list-item">
                        about
                    </li>
                    <li className="menu-list-item">
                        contact
                    </li>
                    <li 
                        onClick={()=> setMenuOpen(false)}
                        className="menu-list-item">
                        <Link className='link' to='/write'>write</Link>
                    </li>
                    <li onClick={() => {
                        setMenuOpen(false)
                        exit ? setExit(false) : setExit(true)
                        }} 
                        className="menu-list-item">
                        logout
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TopBar
