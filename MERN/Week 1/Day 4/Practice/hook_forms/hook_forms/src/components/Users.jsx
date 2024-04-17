import React, { useState } from 'react';
import '../Users.css'

const Users = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };


    return (
        <form className='form' onSubmit={createUser}>
            <h1>Register Here!</h1>
            <div className='row' >
                <label >First Name </label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className='row'>
                <label >Last Name </label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className='row'>
                <label >Email Address </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='row'>
                <label >Password </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='row'>
                <label >Confirm Password </label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <hr style={{ width: "1000px" }} />
            <h2>Your Data Entered</h2>
            <p className='row1'>First name {firstName}</p>
            <p className='row1'>Last name {lastName}</p>
            <p className='row1'>Email Address {email}</p>
            <p className='row1'>Password {password}</p>
            <p className='row1' ç>Confirm Password {confirmPassword}</p>
        </form>


    )
}

export default Users

