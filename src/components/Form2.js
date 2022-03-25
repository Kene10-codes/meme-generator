import { useState } from "react"

export default function App() {
    const [formData, setFormData] =  useState({
        email: "",
        password: "",
        confirmPassword: "",
        subscribe: true
    })

    console.log(formData)
    function handleChange(e) {
        const {name, value, type, checked}  = e.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password === formData.confirmPassword) {
            console.log("Successfully signup")
        } else {
            console.log("Password not match")
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                        value={formData.subscribe}
                        name = "subscribe"
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
