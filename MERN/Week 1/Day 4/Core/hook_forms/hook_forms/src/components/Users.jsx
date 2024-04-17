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
            {firstName.length >= 1 & firstName.length < 2 ? <p style={{ color: "red", textAlign: 'left' }}>First Name has to be more than two characters</p> : <p></p>}
            <div className='row'>
                <label >Last Name </label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            {lastName.length >= 1 & lastName.length < 2 ? <p style={{ color: "red", textAlign: 'left' }}>Last Name has to be more than two characters</p> : <p></p>}
            <div className='row'>
                <label >Email Address </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            {email.length >= 1 & email.length < 2 ? <p style={{ color: "red", textAlign: 'left' }}>Email address has to be more than two characters</p> : <p></p>}
            <div className='row'>
                <label >Password </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {password.length >= 1 & password.length <= 8 ? <p style={{ color: "red", textAlign: 'left' }}>Password has to be more than 8 characters</p> : <p></p>}
            <div className='row'>
                <label >Confirm Password </label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                {console.log(password)}
            </div>
            {password !== confirmPassword ? <p style={{ color: "red", textAlign: 'left' }}>Password must match</p> : <p></p>}
            <hr style={{ width: "1000px" }} />
        </form>


    )
}

export default Users

