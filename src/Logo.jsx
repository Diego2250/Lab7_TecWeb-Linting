import React from 'react'
import './Logo.css'
import logo from './assets/ducklogo.svg'

function Logo() {
    return (
        <div>
            <img src={logo} alt="DuckDuckGo logo" className="main_logo" />
        </div>
    )
}

export default Logo
