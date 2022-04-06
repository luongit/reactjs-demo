import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <nav className="nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/product">Product</NavLink>
            </nav>
        );
    }
}

export default Header;

