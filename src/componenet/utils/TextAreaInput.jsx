import React, { useState } from 'react'
import { useRef } from 'react'

const TextAreaInput = (props) => {
  const [textAreaValue,setTextAreaValue] = useState(props.InputValue);

  const handleInputChange=(e)=>{
    setTextAreaValue(e.target.value)
    // console.log(textAreaValue)
    props.onSaveTextAreaValue(e.target.value)
  }
  return (
    <textarea onChange={handleInputChange} className={ `${props.className} input resize-none`} value={textAreaValue} placeholder={props.placeholder}/>
  )
}

export default TextAreaInput