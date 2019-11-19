import React from 'react'

const Item = ({ name, place, date, description }) => {
  return (
    <div className="Item">
      <h3>{name} @ {place}</h3>
      <h3><span>{date}</span></h3>
      <p>{description}</p>
    </div>
  )
}

export default Item
