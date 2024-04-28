import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'



const Create = () => {
    const [name, setName] = useState("")
    const [error, setError] = useState([])
    const nav = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/authors/new', { name })
            .then(res => {
                console.log(res);
                nav('/authors')
            }).catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                setError(errorArr);
            })

    }
    const submitEraser = () => {
        setName("")
    }
    return (
        <div>
            <Link to="/authors">Home</Link>
            <p>Add a new author:</p>

            {error.map((err, index) => (
                <p key={index} className='text-danger'>{err}</p>
            ))}
            <div className='d-flex justify-content-center mb-3'>
                <label className='m-2' >Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='d-flex justify-content-center'>

                <button className='btn btn-danger m-2' onClick={(e) => submitEraser(e.target.value)}> Cancel </button>
                <button className='btn btn-success m-2' onClick={submitHandler}>Create</button>

            </div>


        </div >
    )
}

export default Create