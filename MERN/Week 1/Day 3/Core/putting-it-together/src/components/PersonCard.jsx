import React, { useState } from 'react'


const PersonCard = (props) => {
    const [birth, setBirth] = useState(props.age)

    const add = () => {
        setBirth(birth + 1)

    }
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <h3>Age: {birth}</h3>
            <h3>Hair Color: {props.hairColor}</h3>
            <button onClick={() => add()}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}
export default PersonCard;