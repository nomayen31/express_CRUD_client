import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DisplayUser = () => {
    const users = useLoaderData();
    const [updatedUser, setUpdatedUser]= useState(users)

    const handleDelete = (_id) =>{
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
             if (data.deletedCount> 0) {
                alert('Data deleted successfully')
            }
            const filterData = updatedUser.filter((item) => item.id !== _id)
            setUpdatedUser(filterData)
        })
    
    
    }
    return (
        <div>
            <h2>User : {updatedUser.length}</h2>
          <div >
          {
                updatedUser.map(user => <div
                key={user._id}
                >
                <h1>Name: {user.name}</h1>
                <br />
                <button onClick={() => handleDelete(user._id)} type='submit'>Delete</button>
                <br />
                <Link to={`/users/${user._id}`}>
                <button type='submit'>Update</button>
                </Link>
                </div>)
            }
          </div>
        </div>
    );
};

export default DisplayUser;