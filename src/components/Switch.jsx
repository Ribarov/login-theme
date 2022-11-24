import React from 'react'
import {useState} from 'react'

const Switch = () => {
    const [check, setCheck] = useState(false)
    function handleCheck() {
    setCheck(prevCheck => !prevCheck)
}

    return (
      <label className="switch">
        <input type="checkbox" value={check} onChange={handleCheck} />
        <div className="slider"></div>
      </label>
    );
}

export default Switch
