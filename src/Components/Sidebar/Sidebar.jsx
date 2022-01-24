import './Sidebar.scss'
import React from 'react'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-item">
                <p className="sidebar-title">about me</p>
                <img src="https://images.pexels.com/photos/5926388/pexels-photo-5926388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=940" alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eaque optio reprehenderit, sequi iure libero?</p>
            </div>
            <div className="sidebar-item">
                <p className="sidebar-title">
                    Categories
                </p>
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">Nodejs</li>
                    <li className="sidebar-list-item">Reactjs</li>
                    <li className="sidebar-list-item">Javascript</li>
                    <li className="sidebar-list-item">HTML</li>
                    <li className="sidebar-list-item">C#</li>
                    <li className="sidebar-list-item">Python</li>
                </ul>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">Follow Us</span>
                <div className="sidebar-social">
                <i className="fab fa-facebook-square sidebar-icon"></i>
                <i className="fab fa-twitter-square sidebar-icon"></i>
                <i className="fab fa-pinterest-square sidebar-icon"></i>
                <i className="fab fa-instagram-square sidebar-icon"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
