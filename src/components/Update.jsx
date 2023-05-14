/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const userUpdate = useLoaderData();

    return (
        <div>
           |Update info of {userUpdate.name}
        </div>
    );
};

export default Update;