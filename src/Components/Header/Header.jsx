import './Header.scss'
import React from 'react'

function Header() {
    return (
        <div className='header'>
            <div className="header_titles">
                <span className="header_title-sm">React & Node</span>
                <span className="header_title-lg">Blog</span>
            </div>
            <img src="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1800" alt="" className="header-img" />
        </div>
    )
}

export default Header
