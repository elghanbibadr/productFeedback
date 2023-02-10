import React from 'react'

const TextAreaInput = (props) => {
  return (
    <textarea className={ `${props.className} input resize-none`} placeholder={props.placeholder}/>
  )
}

export default TextAreaInput