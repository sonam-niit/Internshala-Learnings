import axios from "axios";
import React, { useEffect, useState } from "react";

export function UserList(props) {

    //create a users state with initial value as empty array
    const [users, setUsers] = useState([]);
    const url = 'http://localhost:5000/api/user/'

    useEffect(() => {
        getData();
    }, [])
    const viewUser = (id) => {
        // props.history.push({
        //     pathname:'/details/'+id
        // })
    }
    const deleteUser = async (id) => {
        await axios.delete(`${url}/${id}`);
        getData();
    }
    const getData = async () => {
        const resp = await axios.get(url);
        setUsers(resp.data);
        // axios.get(url)
        //     .then(resp => setUsers(resp.data))
        //     .catch(error => console.log(error))
    }
    const tabRow = users.map((user, i) => {
        return (
            <tr key={i}>
                <td>{user.fname}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.country}</td>
                <td>
                <button className="btn btn-success" onClick={() => { viewUser(user._id) }}>
                        view
                    </button>
                    <button className="btn btn-danger" onClick={() => { deleteUser(user._id) }}>
                        Delete
                    </button>
                </td>
            </tr>
        )
    })
    return (
        <div>
            <h1>User List</h1>
            <hr></hr>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Country</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {tabRow}
                </tbody>
            </table>
        </div>
    );
}