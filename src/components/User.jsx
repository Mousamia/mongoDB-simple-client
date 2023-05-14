/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {
    const user = useLoaderData();
    const handleData = id => {
        console.log( "delete", id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })

        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <h2> user : {user.length} </h2>
            {
                user.map(use =>
                    <p key={use._id}>
                        {use.name} {use.email} <button onClick={ () => handleData(use._id)}>X</button>
                    </p>)
            }

        </div>
    );
};

export default User;