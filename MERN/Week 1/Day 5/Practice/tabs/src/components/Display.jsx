import React from 'react'


const Display = (props) => {
    return (
        <div className='d-flex justify-content-center'>
            <h5 className="border border-dark text ">{props.tabs[props.currentTab].content}</h5>
        </div>
    )
}

export default Display