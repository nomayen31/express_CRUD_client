import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateData = () => {
    const singleData = useLoaderData();
    console.log(singleData);

    const handleUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email ,password);
        const updateData = {name, email ,password};
        console.log(updateData);
        fetch(`http://localhost:5000/users/${singleData._id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updateData)

        })

        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <h1>Updated Data </h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name='name' placeholder='enter your name ' defaultValue={singleData?.name} />
                <br />
                <br />
                <input type="email" name='email' placeholder='enter your email' defaultValue={singleData?.email} />
                <br />
                <br />
                <input type="password" name='password' placeholder='enter your password' defaultValue={singleData?.password}/>
                <br />
                <br />
                <button type='submit'>Update</button>



            </form>
        </div>
    );
};

export default UpdateData;