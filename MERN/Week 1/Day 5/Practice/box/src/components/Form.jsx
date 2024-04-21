import React, { useState } from 'react'
import "./Form.css"


const Form = () => {

    const [color, setColor] = useState("");
    const [box, setBox] = useState([])
    const newBox = {
        color: color
    }


    const sumbitHandler = (e) => {
        e.preventDefault()
        setColor('')
        setBox([...box, newBox]);
    }
    return (
        <div>
            <form className='container ' onSubmit={sumbitHandler}>
                <div className='d-flex justify-content-center ms-3'>
                    <h3 className='ms-2'>Color</h3>
                    <input className='form-control ms-3 input' placeholder='Color' type="color" onChange={(e) => { setColor(e.target.value) }} />
                    <button className='btn btn-light ms-3'>Submit</button>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {box.map((boxes, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: boxes.color,
                                width: "100px",
                                height: `100px`,
                                margin: '5px'
                            }}
                        />
                    ))}
                </div>
            </form >
        </div >
    )
}

export default Form