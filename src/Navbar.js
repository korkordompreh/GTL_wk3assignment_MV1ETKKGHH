import React, { Component } from 'react'
import './App.css';
import './CSS/layout.css';
import './CSS/global.css';
import './CSS/components.css';
import './CSS/sample-wallpaper.css'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <a href="#">Hulk</a>
                    <a href="#" className="logo is-active">Mavel</a>
                    <a href="#">Venom</a>
                </div>
            </nav>
        )
    }
}

export default Navbar
