
import React, { useState } from 'react';
import "./Login.css"
import { Link } from "react-router-dom"
import "./mainPage.css"

import axios from 'axios'
import { useHistory } from 'react-router-dom';





function Mainpage() {
    const history= useHistory()
   
   

    
    const handleSubmit= async (e)=>{
        e.preventDefault()
       alert("Additional Details Saved Successfully")
       history.push("/login")
     
    }
    


    return (
        <div className='login'>
             
            <div className='login__container'>
                <h1>Additional Information</h1>
                <form >
                    <h5>Age</h5>
                    <input type="number"  name="age"  />
                    <h5>Gender</h5>
                    <select name='gender' placeholder='Select-Gender'>
                       <option value="Male">Male</option>
                       <option value="Female">Female</option>
                    </select>
                    <h5>Your DOB</h5>
                    <input type="date"  name="date"  />
                    <button className='login__signInButton' type='submit' onClick={handleSubmit} >Save</button>
                </form>
               
               <div>
              
               </div>
            </div>
        </div>
    )
}

export default Mainpage;
