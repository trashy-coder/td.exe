import React, { Component } from 'react'
import './header.css';
import logo from './pic/logo.svg';


class Header extends Component {
    render() {
        return (
            <header>
                <div className="NavBar">
                    <a href="/td.exe/home"><img className="logo , logo-Dark " alt="" src={logo}></img></a>
                    <ul className="NavList">
                        <li className="NavList-Element"><a href="/td.exe/home">Home</a></li>
                        <li className="NavList-Element"><a href="/td.exe/aktuell">Aktuell</a></li>
                        <li className="NavList-Element"><a href="/td.exe/downloads">Downloads</a></li>
                        <li className="NavList-Element"><a href="/td.exe/projecte">Projekte</a></li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header