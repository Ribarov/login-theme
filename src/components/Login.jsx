import React from 'react'
import { useState, useContext } from 'react'
import { ThemeSwitch } from '../App'

const Login = () => {
      const [form, setForm] = useState({
        userName:"",
        passWord:'',
        checkPassWord:'',
        checkbox:true
    })
    
    const {theme} = useContext(ThemeSwitch)
    
    const handleInput = (event) => {
        setForm(prevForm => {
            const {name, type, checked, value } = event.target
            return {...prevForm,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(form.passWord === form.checkPassWord) {
            
        }else {
            alert("Wrong password")
            return
        }
        if(form.checkbox) {
            console.log("Thanks for signing up")
        }
    }
    
    return (
          <div >   
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-box" id={theme}>
                  <div className="user-div">
                    <input className="userName"
                        required 
                           name="userName" 
                           placeholder="Username"
                           value={form.userName}
                           onChange={handleInput} />
                  </div>
                  
                  <div className="pass-div">
                    <input type="password" 
                           className="passWord" 
                           name="passWord" 
                           placeholder="Password"
                           value={form.passWord}
                           onChange={handleInput} />
                  </div>
                  
                  <div className="checkpass-div">
                    <input className="checkPass" 
                           type="password" 
                           name="checkPassWord" 
                           placeholder="Retype password"
                           value={form.checkPassWord}
                           onChange={handleInput} />
                  </div>
                  <br></br>
                  <div className="checkbox">
                        <input type="checkbox" 
                        id="checkbox" 
                        name="checkbox" 
                        value={form.checkbox}
                        onChange={handleInput}
                        />
                        <label htmlFor="checkbox" > I want to join the Newsletter </label>
                  </div>
                  <button className="button">Login</button>
                  
                </div>
            </form>
           
        </div>
  
    )
}

export default Login