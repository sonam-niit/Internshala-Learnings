import axios from 'axios';
import React, { useState } from 'react';
export function AddUser(){

    const [user,setUser]=useState({fname:'',email:'',password:'',country:''})

    const inputHandler= (e)=>{

        setUser((user)=>({...user,[e.target.name]:e.target.value}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/api/user",user)
        .then(resp=>console.log(resp))
        .catch(error=>console.log("Error Occured",error))
    }
    return(
        <div>
            <h1>Add USer</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type='text' name='fname' id='fname' placeholder='Enter First Name'
                onChange={inputHandler} value={user.fname || ''}/>

                <label>Email</label>
                <input type='email' name='email' id='email' placeholder='Enter emailID'
                onChange={inputHandler} value={user.email || ''}/>

                <label>Password</label>
                <input type='password' name='password' id='password' placeholder='Enter Password'
                onChange={inputHandler} value={user.password || ''}/>

                <label>Country</label>
                <input type='text' name='country' id='country' placeholder='Enter Country'
                onChange={inputHandler} value={user.country || ''}/>

                <button type='submit'>Add User</button>
            </form>
        </div>
    );
}