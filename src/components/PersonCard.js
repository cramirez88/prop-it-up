import React, { useState } from 'react'

const PersonalCard = props => {
  const [age, setAge] = useState(props.age)
  const handleClick = () => {
    setAge(age + 1)
  }
  return (
    <div>
      <h2>{props.lname}, {props.fname}</h2>
      <p>Age: { age }</p>
      <p>Hair Color: {props.hairColor}</p>
      <button onClick = { handleClick } >Birthday Button for {props.fname} {props.lname}</button>
    </div>
  )
}

export default PersonalCard



