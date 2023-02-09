import React, { useState } from 'react'

const UpVoteIcon = (props) => {
    const [isActive,setActive]=useState(false)
    const handleClick=()=>{
        setActive(prv => !prv)
    }
  return (
    <div onClick={handleClick} className={`${props.className}  text-[.8rem]  cursor-pointer  hover:bg-greyHover font-semibold bg-grey py-2 px-3 w-fit h-fit rounded-lg md:text-[1rem] ${isActive ?  "bg-blue text-white hover:bg-blue" :"text-blue"}`}>
        <span >{props.text}</span>
    </div>
  )
}

export default UpVoteIcon