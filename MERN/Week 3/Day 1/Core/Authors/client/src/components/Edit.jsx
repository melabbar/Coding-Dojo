import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
    const nav = useNavigate()
    const { id } = useParams()
    const [name, setName] = useState("")
    const [nameOne, setNameOne] = useState("")
    const [error, setError] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.name)
                setNameOne(res.data.name)
            })
    }, [id])


    const submitHandler = (e) => {
        e.preventDefault()

        axios.patch(`http://localhost:8000/api/authors/${id}/edit`, { name })
            .then(res => {
                console.log(res)
                nav('/authors')
            }).catch(err => {
                const errorRes = err.response.data.errors;
                const errArray = []
                for (const key of Object.keys(errorRes)) {
                    errArray.push(errorRes[key].message)
                }
                setError(errArray)
            })

    }
    const submitEraser = () => {
        setName(nameOne)
    }

    return (
        <div>
            <Link to="/authors">Home</Link>
            <p>Edit author:</p>
            {error.map((err, index) => (
                <p key={index} className='text-danger'>{err}</p>
            ))}
            <div className='d-flex justify-content-center mb-3'>
                <label className='m-2'>Name</label>
                <input type="text" value={name} placeholder={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-danger m-2' onClick={() => submitEraser(name)}> Cancel </button>
                <button className='btn btn-success m-2' onClick={submitHandler}>Sumbit</button>

            </div>
        </div>
    )
}

export default Edit