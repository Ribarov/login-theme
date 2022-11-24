import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Login from './components/Login'

const App = () => {
    
    return(
        <div className="app-container" id="theme">
            <Navbar />
            <Login />
        </div>
    )
}

export default App