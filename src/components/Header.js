import React, { Component } from 'react'
import './header.css';
import logo from './pic/logo.svg';


class Header extends Component {
    render() {
        return (
            <header>
                <div className="NavBar">
                    <a href="/home"><img className="logo , logo-Dark " alt="" src={logo}></img></a>
                    <ul className="NavList">
                        <li className="NavList-Element"><a href="/home">Home</a></li>
                        <li className="NavList-Element"><a href="/aktuell">Aktuell</a></li>
                        <li className="NavList-Element"><a href="/downloads">Downloads</a></li>
                        <li className="NavList-Element"><a href="/projecte">Projekte</a></li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header