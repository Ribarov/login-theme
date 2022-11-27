import React from 'react'
import { useState, useEffect, createContext } from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import ReactSwitch from 'react-switch'

export const ThemeSwitch = createContext(null)

const App = () => {
    const [theme, setTheme] = useState("light")
    const toggleSwitch = () => {
        setTheme(prevTheme => (prevTheme === "light"? "dark" : "light"))
    }
    return(
        <ThemeSwitch.Provider value={theme, toggleSwitch}>
            <div className="app-container" id={theme}>
                <Navbar/>

                <Login />
                 
                           
                 <ReactSwitch className="react-switch" id={theme} onChange={toggleSwitch} checked={theme === "dark"} />
                 <div className="label-container">
                    <label className="light-label">{theme === "light" ? "Light Theme": ""}</label>   
                    <label className="dark-label">{theme === "dark" ? "Dark Theme": ""}</label>
                    </div>
                 
                 
            </div>
        </ThemeSwitch.Provider>            
    )
}

export default App