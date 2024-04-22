import React from 'react'
import '../App.css'


const Tabs = (props) => {
    return (
        <div className='d-flex justify-content-evenly mt-3 '>
            {
                props.tabs.map((tab, index) => (
                    <button className='btn btn-light mb-3' onClick={() => props.setCurrentTab(index)}>{tab.label}</button>
                ))
            }
        </div>
    )
}

export default Tabs