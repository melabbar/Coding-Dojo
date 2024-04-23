import React from 'react';

const Display = (props) => {
    const handleToggle = (index) => {
        props.setList(
            props.list.map((lists, idx) =>
                idx === index ? {
                    ...lists, checked: !lists.checked
                } : lists
            )
        )

    }
    const deleteValue = (index) => {
        props.setList(oldList => {
            return oldList.filter((_, i) => i !== index);
        });
    };

    return (
        <div>
            {
                props.list.map((ele, index) => (
                    <div className='d-flex flex-row justify-content-center' key={index}>
                        <h3 className='m-2' style={{ textDecoration: ele.checked ? 'line-through' : 'none' }}>{ele.input}</h3>
                        <input className='m-2' type="checkbox" checked={ele.checked} onChange={() => handleToggle(index)} />
                        <button className='m-2 btn btn-dark' onClick={() => deleteValue(index)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
};

export default Display;
