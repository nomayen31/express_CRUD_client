const PostUser = () => {
    const handlePostUser = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email ,password);
        const myData = {name, email ,password};
        console.log(myData);
        fetch('http://localhost:5000/users',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(myData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            form.reset()
        })
    }
    return (
        <div>
            <h2>User: </h2>

            <form onSubmit={handlePostUser}>
                <input type="text" name='name' placeholder='enter your name ' />
                <br />
                <br />
                <input type="email" name='email' placeholder='enter your email' />
                <br />
                <br />
                <input type="password" name='password' placeholder='enter your password'/>
                <br />
                <br />
                <button type='submit'>submit</button>



            </form>
        </div>
    );
};

export default PostUser;