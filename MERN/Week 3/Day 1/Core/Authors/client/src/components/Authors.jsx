import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Authors = () => {
    const [author, setAuthor] = useState([])
    const nav = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                const sort = res.data.sort((a, b) => a.name.localeCompare(b.name));
                setAuthor(sort)
            })
            .catch(err => console.log(err))
    }, [])


    const deleteObject = (id) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
            .then(res => {
                setAuthor(author.filter(authors => authors._id !== id))
            })
            .catch(err => console.log(err))
    }




    return (
        <div >
            <div>
                <Link to="/authors/new">Add an Author</Link>
                <p className='text-primary'>We Have quotes by:</p>
            </div >
            <div className='d-flex justify-content-center '>
                <table className='table table-borderless w-50'>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions Available</th>
                        </tr>
                    </thead>

                    <tbody>
                        {author.map((authors) => (
                            <tr key={authors._id}>
                                <td>{authors.name}</td>
                                <td className='d-flex justify-content-around'>
                                    <button className='btn btn-success w-25' onClick={() => { nav(`/authors/${authors._id}/edit`) }}>Edit</button>
                                    <button className='btn btn-danger w-25' onClick={() => deleteObject(authors._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div >
    )
}

export default Authors