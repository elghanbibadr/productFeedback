import React from 'react'
const Card = (props) => {
  const handleCardClicked=(event)=>{
     if (props.className.includes('suggestionCard')){
      props.onClick(event.currentTarget)
     }
  }
  return (
    <div id={props.id} onClick={handleCardClicked} className={`${props.className} bg-white p-4 rounded-md`}>{props.children}</div>
  )
}

export default Card

