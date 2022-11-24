import React from 'react'
import { useState, useEffect } from 'react'
import Switch from './Switch'

const Navbar = (props) => {
    
    return(
        <div className="nav-container">
            <img src="../react-logo.png" className="logoReact" alt="logo"/>
            <div>
                <Switch />
            </div>
        </div>
    )
}

export default Navbar