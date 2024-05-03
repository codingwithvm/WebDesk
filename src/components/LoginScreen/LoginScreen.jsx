import { useState } from 'react'
import './style.css'

export default ({ onLogin }) => {
    const handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value 
        const password = event.target.elements.password.value 

        if (username === "root" && password === "root") onLogin()
        else console.log('Credenciais Incorretas')
    }

    return (
        <div className="desktop">
            <h1 className="logo">
                WebDesk
            </h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" id="username" placeholder="Username" required autoComplete='off' />
                <input type="password" id="password" placeholder="Password" required />
                <input type="submit" value=">" />
            </form>
        </div>
    )
}