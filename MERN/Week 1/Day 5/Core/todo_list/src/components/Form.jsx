import React, { useState } from 'react'

const Form = (props) => {
    const [info, setInfo] = useState("")
    const submitHandler = (e) => {
        //stop page from refreshing
        e.preventDefault()
        //add new value into the list WITHOUT replacing first value
        props.setList([...props.list, {
            input: info,
            checked: false
        }])
        //RESET input to empty value
        setInfo("")
    }
    return (
        <div >
            <form className='mt-3' onSubmit={(e) => submitHandler(e)}>
                <div>
                    <input type="text" value={info} onChange={(e) => setInfo(e.target.value)} />
                </div>
                <div>
                    <button className='mt-3 btn btn-primary'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default Form



