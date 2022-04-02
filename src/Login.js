
import React, { useState } from 'react';
import "./Login.css"
import { Link } from "react-router-dom"



import axios from 'axios'





function Login() {
   
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const handleSubmit= async (e)=>{
        e.preventDefault()
        try {
            var response= await axios.post("https://cheak.herokuapp.com/register/login",{
                email:email,
                password:password
            })
            console.log(response.data)
            if(response.data){
                await localStorage.setItem("token",response.data)
                var currentUser=email
                console.log(currentUser)
               //
                
            }
        } catch (error) {
            console.log(error)
        }
     
    }
    


    return (
        <div className='login'>
             
            <div className='login__container'>
                <h1>Sign-In</h1>
                <form >
                    <h5>E-mail</h5>
                    <input type="text" value={email}  name="email" onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} name="password" onChange={e => setPassword(e.target.value)} />
                    <button className='login__signInButton' type='submit' onClick={handleSubmit} >Sign-In</button>
                </form>
               
               <div>
               {/* <button className='login__registerButton'>Create Your Amazon Account</button> */}
                   <Link to="/">
                   <button className='login__registerButton'>Create Your own Account</button></Link>
               </div>
            </div>
        </div>
    )
}

export default Login;
// const signIn = async(e) => {
//     e.preventDefault();
//    try {
//     const log=signInWithEmailAndPassword(auth,email,password)
//     if(user){
//         history.push("/")
//     }
//    } catch (error) {
//        alert(error.message)
//    }
// }