import { NavLink } from 'react-router-dom';
import React from 'react';

function AboutNav() {
    return (
        <nav id="aboutLinks" className="form-inline">
            <div className="menu-link" id="about-link">
                <NavLink to="/" activeClassName="activeLink">Home</NavLink>
            </div>
            <div className="menu-link" id="about-link">
                <NavLink to="/about" activeClassName="activeLink">About</NavLink>
            </div>
            <div className="menu-link" id="liked-link">
                <NavLink to="/liked" activeClassName="activeLink">Liked Activities</NavLink>
            </div>
        </nav>
    )
}

export { AboutNav };