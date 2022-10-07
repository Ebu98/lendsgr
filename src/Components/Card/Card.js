import React from 'react'
import './card.scss'

const Card = ({icon, text, number}) => {
  return (
    <div className="card">
        <p>{icon}</p>
        <p>{text}</p>
        <p>{number}</p>
    </div>
  )
}

export default Card