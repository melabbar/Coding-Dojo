import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

const Details = (props) => {
    const [oneProduct, setOneProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => setOneProduct(res.data.Product))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Title: {oneProduct.title}</h1>
            <h3>Price: {oneProduct.price}</h3>
            <h3>Description: {oneProduct.description}</h3>
        </div>
    )
}

export default Details;

