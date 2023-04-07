import React, { useEffect, useState } from "react";
import axios from 'axios';

export function UserList(){

    const [users,setUsers]=useState([]);

    useEffect(()=>{
        getdata();
    },[])
    const getdata=()=>{
        axios.get("http://localhost:5000/api/user")
        .then(resp=>setUsers (resp.data))
        .catch(error=>console.log(error))
    }

    const tabRow= users.map((user,i)=>{
        return(
            <tr key={i}>
                <td>{user._id}</td>
                <td>{user.fname}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.country}</td>
            </tr>
        )
    })

    return (
        <div>
            <h1>User List</h1>
            <table>
                <thead><tr><th>Id</th><th>Name</th><th>Email</th><th>Password</th>
                <th>Country</th></tr></thead>
                <tbody>
                    {tabRow}
                </tbody>
            </table>
        </div>
    )
}