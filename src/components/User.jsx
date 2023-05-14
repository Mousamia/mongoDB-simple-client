/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
    const user = useLoaderData();

    const [users, setUsers] = useState([]);
    const handleData = id => {
        console.log("delete", id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert("successfully deleted");
                    const remainingData = user.filter(user._id !== id);
                    console.log(remainingData);
                    setUsers(remainingData);
                }

                else alert("not found data")
            })
    }
    return (
        <div>
            <h2> user : {user.length} </h2>
            {
                user.map(use =>
                    <p key={use._id}>
                        {use.name} {use.email} {use._id}

                        <Link to={`/update/${use._id}`}>
                            <button> Update </button>
                        </Link>


                        <button onClick={() => handleData(use._id)}>X</button>
                    </p>)
            }

        </div>
    );
};

export default User;