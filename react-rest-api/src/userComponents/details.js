import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export function Details() {

    const [user, setUser] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    const getUserDetails = async () => {
        const resp = await axios.get(`http://localhost:5000/api/user/${params.id}`);

        setUser(resp.data);
    }
    
    useEffect(() => {
        getUserDetails();
    }, [])

    return (
        <div>
            <h1>User Details:</h1>
            <hr></hr>
            <button className="btn btn-warning" onClick={()=>{navigate(-1)}}>Go Back</button>
            <div className="row m-3">
                <div className="col-md-4 offset-4">
                    <ul className="list-group">
                        <li className="list-group-item">Name: {user.fname}</li>
                        <li className="list-group-item">Email: {user.email}</li>
                        <li className="list-group-item">Country: {user.country}</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}