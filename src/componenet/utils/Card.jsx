import React from 'react'
const Card = (props) => {
  const handleCardClicked=(event)=>console.log(event.currentTarget.id)
  return (
    <div onClick={handleCardClicked} className={`${props.className} bg-white p-4 rounded-md`}>{props.children}</div>
  )
}

export default Card

