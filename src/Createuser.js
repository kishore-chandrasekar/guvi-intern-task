import React from 'react'
import { useState } from 'react';
import Login from './Login';

import { Navigate, useHistory } from 'react-router-dom';
import axios from 'axios'
import './CreateUser.css'

function CreateUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");

    const history = useHistory()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            var response = await axios.post("https://cheak.herokuapp.com/register/registerUser", {
                email: email,
                password: password,
                phone: phone,
                username: username
            })
            console.log(response)


            history.push('/login')
            alert("User created successfully")


        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className='createuser'>
            
            <div className='createuser__container'>
                <h1>Create Your Own Account</h1>
                <form  >
                    <h5>User-Name</h5>
                    <input type="text" value={username} name="username" onChange={e => setUsername(e.target.value)} required />
                    <h5>E-mail</h5>
                    <input type="text" value={email} name="email" onChange={e => setEmail(e.target.value)} required />
                    <h5>Phone</h5>
                    <input type="text" value={phone} name="phone" onChange={e => setPhone(e.target.value)} required />
                    <h5>Password</h5>
                    <input type="password" value={password} name="password" onChange={e => setPassword(e.target.value)} required />
                    <h5>Confirm Password</h5>
                    <input type="password"  name="Confirm-password"  required />
                    <button className='createuser__signInButton' type='submit' onClick={handleSubmit}>Sign-Up</button>

                </form>
                <p>
                    By signing-Up you agree to our conditions of use & sale.Please
                    see our Privacy Notice,our Cookies Notice and our Interest based Ads Notice.
                </p>
            </div>
        </div>
    )
}

export default CreateUser