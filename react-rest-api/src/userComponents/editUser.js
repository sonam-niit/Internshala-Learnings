import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function EditUser(){

    const navigate=useNavigate();
    const [user,setUser]= useState({});
    const params= useParams();
    const getUserDetails= async()=>{
        try {
            const resp= await axios.get(`http://localhost:5000/api/user/${params.id}`);
            setUser(resp.data);
        } catch (error) {
            console.log(error)
        }
    }
    const inputHandler = (e) => {

        setUser((user) => ({ ...user, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp=axios.put(`http://localhost:5000/api/user/${params.id}`, user)
            navigate("/userlist");
        } catch (error) {
            console.log("Error Occured ",error)
        }
        
        
            
    }
    useEffect(()=>{
        getUserDetails()
    },[])
    return(
        <div>
            <h1>Update My Profile</h1>
            <hr></hr>
            <div className='row'>
                <div className='col-md-6 offset-3'>
                    <form onSubmit={handleSubmit}>
                        <label>First Name</label>
                        <input className='form-control' type='text' name='fname' id='fname' placeholder='Enter First Name'
                            onChange={inputHandler} value={user.fname || ''} />

                        <label>Email</label>
                        <input className='form-control' type='email' name='email' id='email' placeholder='Enter emailID'
                            onChange={inputHandler} value={user.email || ''} />

                        <label>Password</label>
                        <input className='form-control' type='password' name='password' id='password' placeholder='Enter Password'
                            onChange={inputHandler} value={user.password || ''} />

                        <label>Country</label>
                        <input className='form-control' type='text' name='country' id='country' placeholder='Enter Country'
                            onChange={inputHandler} value={user.country || ''} />
                        <button className='btn btn-primary mt-3' type='submit'>Update</button> &nbsp; &nbsp;
                        <button className='btn btn-warning mt-3' onClick={()=>{navigate(-1)}}>cancel</button>
                    </form>
                </div>
            </div>
            
        </div>
    );
}