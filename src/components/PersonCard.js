import React from 'react'

const PersonalCard = props => {
  return (
    <div>
      <h2>{props.lname}, {props.fname}</h2>
      <p>Age: {props.age}</p>
      <p>Hair Color: {props.hairColor}</p>
    </div>
  )
}

export default PersonalCard