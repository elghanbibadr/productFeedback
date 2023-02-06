import React from 'react'
const Card = (props) => {
  return (
    <div className={`${props.className} bg-white p-4 rounded-md`}>{props.children}</div>
  )
}

export default Card

