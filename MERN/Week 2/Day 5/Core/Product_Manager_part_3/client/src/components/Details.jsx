import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";


const Details = (props) => {
    const [oneProduct, setOneProduct] = useState({})
    const { id } = useParams();
    const nav = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => setOneProduct(res.data.Product))
            .catch(err => console.error(err));
    }, []);

    const { removeProduct } = props

    const deleteProduct = (id) => {

        axios.delete('http://localhost:8000/api/products/' + id)
            .then((res) => {
                removeProduct(id)
            })
            .catch(err => console.log(err))

        nav('/')
    }

    return (
        <div>
            <h1>Title: {oneProduct.title}</h1>
            <h3>Price: {oneProduct.price}</h3>
            <h3>Description: {oneProduct.description}</h3>
            <Link to={"/" + oneProduct._id + "/edit"}>Edit</Link>
            <button onClick={() => { deleteProduct(oneProduct._id) }}>Delete</button>
        </div>
    )
}

export default Details;

