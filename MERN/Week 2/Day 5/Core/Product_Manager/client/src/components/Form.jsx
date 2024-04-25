import React, { useState } from 'react'
import axios from 'axios'
import './Form.css';
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const nav = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))

        setTitle("")
        setPrice(0)
        setDescription("")

        nav("/products")

    }

    return (
        <div>
            <form onSubmit={submitHandler} className='f1'>
                <p className='para'>
                    <label>Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                </p>
                <p className='para'>
                    <label>Price</label>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
                </p>
                <p className='para'>
                    <label>Description</label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                </p>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    )
}

export default Form