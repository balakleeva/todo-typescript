import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper px1">
                <a href="#" className="brand-logo">react</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Todo list</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar